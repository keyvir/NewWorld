
export default [
  {
    path: '/',
    component: () => import('layouts/myly'),
    children: [
      { path: '', component: () => import('components/Home') },
      { path: 'diary', component: () => import('components/Diary') },
      { path: 'place', component: () => import('components/Place') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
