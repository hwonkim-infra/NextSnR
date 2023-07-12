import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const getNestedHeadings = (headingElements) => {
  const nestedHeadings = [];
  headingElements.forEach((heading, index) => {
    const { innderText: title, id } = heading;

    if (heading.nodeName === 'H2') {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === 'H3' && nestedHeadings.length > 0) {
      nestedHeadings.push({ id, title });
    }
  });

  return nestedHeadings;
};

export default function useHeadingsData() {
  const [nestedHeadings, setNestedHeadings] = useState([]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('main h2, main h3'));

    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
}
