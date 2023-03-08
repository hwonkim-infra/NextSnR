import { useEffect, useState } from "react";

// next
import { useRouter } from "next/router";

// utils

import { Controller, useForm } from "react-hook-form";

import DeleteIcon from "@mui/icons-material/Delete";
import { LoadingButton } from "@mui/lab";
import {
    Autocomplete,
    Box, Button,
    Card,
    Chip,
    Grid,
    InputAdornment,
    Stack, Snackbar,
    TextField,
  } from "@mui/material";
  import TinyEditor from "@/sections/@dashboard/KRTA/TinyEditor";

import axios from "axios";

const BlogPostEditForm = ({ isEdit = false, currentBlogPost }) => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm({});
  const { push, query, pathname } = useRouter();

  const values = watch();

  const TAGS_OPTION = ["MD", "EU", "NA", "China", "Korea"];

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const snackbarClick = () => {
    setSnackbarOpen(true);
  };
  const snackbarClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  useEffect(() => {
    reset(currentBlogPost);
  }, [isEdit, currentBlogPost]);

  const onSubmit = async (values) => {
    values.date= new Date();

    if (isEdit) {
      await updateBlogPost(values);
    } else {
      await createBlogPost(values);
      await push("/dashboard/Blog/Posts");
    }
  };

  const updateBlogPost = async (values) => {
    axios
      .put(`/api/BLOG/${query.id}`, values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const createBlogPost = async (values) => {    
    axios
      .post("/api/BLOG", values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  
  async function removeBlogPost() {
    const { id } = query;
    if (window.confirm("이 파일을 삭제하시겠습니까")) {
      try {
        axios
          .delete(`/api/BLOG/${query.id}`, values)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });

        await push("/dashboard/Blog/Posts");
      } catch (error) {
        console.log(error);
      }
    }
  }

  const InputForms = [
    { label: "제목", name: "title", type: "" },
    { label: "작성자", name: "creator", type: "" },
    { label: "reference", name: "reference", type: "" },

  ];

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Card sx={{ p: 1 }}>
                
            <Box
                sx={{
                  display: "grid",
                  columnGap: 2,
                  rowGap: 2,
                gridTemplateColumns: '4fr 4fr',
                
                }}
              >
                {InputForms.map((fieldData) => (
                  <Controller
                    key={fieldData.name}
                    render={({ field }) => (
                      <TextField
                        label={fieldData.label}
                        {...field}
                        InputLabelProps={{ shrink: true }}
                        value={field.value || ""}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {fieldData.unit}
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                    name={fieldData.name}
                    type={fieldData.type}
                    control={control}
                  />
                ))}
              </Box>
              <Box sx={{
                  p:1
                
                }}>

<Controller
                  name="tags"
                  control={control}
                  render={({ field }) => (
                    <Autocomplete
                      multiple
                      freeSolo
                      onChange={(event, newValue) => field.onChange(newValue)}
                      options={TAGS_OPTION.map((option) => option)}
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                          <Chip
                            {...getTagProps({ index })}
                            key={option}
                            size="small"
                            label={option}
                          />
                        ))
                      }
                      renderInput={(params) => (
                        <TextField label="Tags" {...params} />
                      )}
                    />
                  )}
                />

                <Controller
                  name="description"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <TinyEditor onChange={onChange} value={value} />
                    </>
                  )}
                />


                
              </Box>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
                sx={{ mt: 3 }}
              >
                <LoadingButton
                  type="submit"
                  variant="contained"
                  loading={isSubmitting}
                  onClick={snackbarClick}
                >
                  {!isEdit ? "Create File" : "Save Changes"}
                </LoadingButton>
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={3000}
                    message="This File was updated successfully"
                    onClose={snackbarClose}
                  />
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={removeBlogPost}
                >
                  삭제
                </Button>
              </Stack>
            </Card>
          </Grid>
          
        </Grid>
      </form>
    </div>
  );
};

export default BlogPostEditForm;
