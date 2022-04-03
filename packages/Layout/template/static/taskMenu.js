const taskMenu = [
    {header: 'Main'},
    {
      title: 'Home',
      group: 'Main',
      icon: 'mdi-home-outline',
      name: 'Dashboard',
      href: '/dashboard'
    },
    {
      title: 'Settings',
      group: 'settings',
      component: 'settings',
      icon: 'mdi-cog',
      items: [
        {name: 'notifications', title: 'Notifications', href: '/settings/notifications'},
  
      ]
    },
    {divider: true},
    {header: 'Extras'},
    {
      title: 'Login',
      group: 'extra',
      icon: 'mdi-login',
      href: '/login'
    },
 
  ];
  // reorder menu
  taskMenu.forEach((item) => {
    if (item.items) {
      item.items.sort((x, y) => {
        let textA = x.title.toUpperCase();
        let textB = y.title.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
    }
  });
  
  export default taskMenu;