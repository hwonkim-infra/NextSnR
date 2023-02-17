// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
};

const navConfig = [
  
  // 한국형식승인
  // ----------------------------------------------------------------------
  {
    subheader: 'KRTA',
    items: [
      {
        title: '형식승인',
        path: '/dashboard/KRTA',
        icon: ICONS.ecommerce,
        children: [
          { title: 'HEX', path: '/dashboard/KRTA/HEX' },
          { title: 'WEX', path: '/dashboard/KRTA/WEX' },
          { title: 'Six', path: '/dashboard/KRTA/six' },
        ],
      },
    ],
  },

  // PVC
  // ----------------------------------------------------------------------
  {
    subheader: 'PSC Checklist',
    items: [
      {
        title: 'PSC',
    path: '/dashboard/PSC',
        icon: ICONS.dashboard,
        children: [
          { title: 'EU ', path: '/dashboard/PSC/EU' },
        ],
      },
    ],
  },


  
  // Blog
  // ----------------------------------------------------------------------
  {
    subheader: 'PSC Blog',
    items: [
      {
        title: 'Blog',
    path: '/dashboard/Blog',
        icon: ICONS.ecommerce,
        children: [
          { title: 'Posts ', path: '/dashboard/Blog/Posts' },
        ],
      },
    ],
  },


  // GENERAL
  // ----------------------------------------------------------------------
  /* {
    subheader: 'general v3.5.0',
    items: [
      { title: 'One', path: '/dashboard/one', icon: ICONS.dashboard },
      { title: 'Two', path: '/dashboard/two', icon: ICONS.ecommerce },
      { title: 'Three', path: '/dashboard/three', icon: ICONS.analytics },
    ],
  }, */
];

export default navConfig;
