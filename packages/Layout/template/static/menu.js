const Menu = [
    {header: 'Main'},
    {
      title: 'Home',
      group: 'Main',
      icon: 'mdi-home-outline',
      name: 'Dashboard',
      href: '/dashboard'
    },
    {
      title: 'Appointments',
      group: 'Main',
      name: 'Appointments',
      icon: 'mdi-cloud',
      href: '/Appointments'
    },
    {
      title: 'Consumers',
      group: 'Main',
      name: 'Consumers',
      icon: 'mdi-cloud',
      href: '/Consumer'
    },
    {
      title: 'Services',
      group: 'Main',
      name: 'Services',
      icon: 'mdi-cloud',
      href: '/Services'
    },
    {
      title: 'Inventory',
      group: 'Main',
      name: 'Inventory',
      // target: '_blank', target blank to open a new page with the same layout guys =)
      icon: 'mdi-cloud',
      href: '/Inventory/'
    },
    {
      title: 'Clinic',
      group: 'Main',
      icon: 'mdi-cloud',
      name: 'Clinic',
      href: '/Clinic'
    },
    {
      title: 'Billing',
      group: 'Main',
      icon: 'mdi-cloud',
      name: 'Billing',
      href: '/Billing'
    },
    {
      title: 'Facilities',
      group: 'Main',
      icon: 'mdi-cloud',
      name: 'Facilities',
      href: '/Facilities'
    },
    {
      title: 'Incidents',
      group: 'Main',
      icon: 'mdi-cloud',
      name: 'Incidents',
      href: '/Incidents'
    },
    {
      title: 'Marketing',
      group: 'Main',
      icon: 'mdi-cloud',
      name: 'Marketing',
      href: '/Marketing'
    },
    {
      title: 'Performance',
      group: 'Main',
      icon: 'mdi-cloud',
      name: 'Performance',
      href: '/Performance'
    },
    {
      title: 'KnowledgeBase',
      group: 'Main',
      icon: 'mdi-cloud',
      name: 'KnowledgeBase',
      href: '/KnowledgeBase'
    },
    {
      title: 'providers',
      group: 'Main',
      icon: 'mdi-cloud',
      name: 'providers',
      href: '/providers'
    },
    {
      title: 'Notification management',
      group: 'Main',
      name: 'Notification management',
      icon: 'mdi-bell-outline',
      href: '/Notifications'
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