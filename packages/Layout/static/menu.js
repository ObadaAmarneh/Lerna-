const Menu = [
    {header: 'Main'},
    {
      title: 'Home',
      group: 'Main',
      icon: 'mdi-home-outline',
      name: 'Clinic',
      href: '/Clinic'
    },
    {
      title: 'Appointments',
      group: 'Main',
      name: 'Appointments',
      icon: 'mdi-calendar-plus',
      href: '/Appointments'
    },
    {
      title: 'Consumers',
      group: 'Main',
      name: 'Consumers',
      icon: 'mdi-account-plus-outline',
      href: '/Consumer'
    },
    {
      title: 'Services',
      group: 'Main',
      name: 'Services',
      icon: 'mdi-wrench-outline',
      href: '/Services'
    },
    {
      title: 'Inventory',
      group: 'Main',
      name: 'Inventory',
      // target: '_blank', target blank to open a new page with the same layout guys =)
      icon: 'mdi-cube-outline',
      href: '/Inventory'
    },
    
    {
      title: 'Billing',
      group: 'Main',
      icon: 'mdi-note-plus-outline',
      name: 'Billing',
      href: '/Billing'
    },
    {
      title: 'Facilities',
      group: 'Main',
      icon: 'mdi-home-assistant',
      name: 'Facilities',
      href: '/Facilities'
    },
    {
      title: 'Incidents',
      group: 'Main',
      icon: 'mdi-alert-octagon-outline',
      name: 'Incidents',
      href: '/Incidents'
    },
    {
      title: 'Marketing',
      group: 'Main',
      icon: 'mdi-gesture-double-tap',
      name: 'Marketing',
      href: '/Marketing'
    },
    {
      title: 'Performance',
      group: 'Main',
      icon: 'mdi-account-star',
      name: 'Performance',
      href: '/Performance'
    },
    {
      title: 'KnowledgeBase',
      group: 'Main',
      icon: 'mdi-account-search',
      name: 'KnowledgeBase',
      href: '/KnowledgeBase'
    },
    {
      title: 'providers',
      group: 'Main',
      icon: 'mdi-account-multiple',
      name: 'providers',
      href: '/providers'
    },
    {
      title: 'Notification management',
      group: 'Main',
      name: 'Notification management',
      icon: 'mdi-bell-outline',
      href: '/notificationSettings'
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
  Menu.forEach((item) => {
    if (item.items) {
      item.items.sort((x, y) => {
        let textA = x.title.toUpperCase();
        let textB = y.title.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
    }
  });
  
  export default Menu;