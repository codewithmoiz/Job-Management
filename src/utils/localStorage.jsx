const employees = [
  {
    "id": 1,
    "user": "employee",
    "name": "John Doe",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare sales report",
        "desc": "Compile last month's sales data into a report",
        "date": "2025-09-05",
        "category": "Reports",
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team meeting",
        "desc": "Discuss project updates with the marketing team",
        "date": "2025-09-07",
        "category": "Meetings",
        "active": false,
        "newtask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Client follow-up",
        "desc": "Send follow-up emails to pending leads",
        "date": "2025-09-09",
        "category": "Client Work",
        "active": true,
        "newtask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Check invoices",
        "desc": "Verify invoices from last month’s suppliers",
        "date": "2025-09-10",
        "category": "Finance",
        "active": false,
        "newtask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Upload documents",
        "desc": "Upload scanned contracts into the database",
        "date": "2025-09-11",
        "category": "Admin",
        "active": false,
        "newtask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "user": "employee",
    "name": "Alice Smith",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Website bug fixes",
        "desc": "Fix layout issues on the homepage",
        "date": "2025-09-04",
        "category": "Development",
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Write blog article",
        "desc": "Draft article about RV maintenance tips",
        "date": "2025-09-08",
        "category": "Content",
        "active": false,
        "newtask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Code review",
        "desc": "Review pull requests from junior developers",
        "date": "2025-09-09",
        "category": "Development",
        "active": true,
        "newtask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "API integration",
        "desc": "Connect new payment API into checkout flow",
        "date": "2025-09-10",
        "category": "Development",
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Testing session",
        "desc": "Run QA testing on updated product pages",
        "date": "2025-09-12",
        "category": "Testing",
        "active": false,
        "newtask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "user": "employee",
    "name": "Michael Johnson",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Inventory update",
        "desc": "Update the database with new RV parts",
        "date": "2025-09-06",
        "category": "Inventory",
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Check supplier orders",
        "desc": "Verify shipment from suppliers",
        "date": "2025-09-07",
        "category": "Supplies",
        "active": false,
        "newtask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Email newsletter",
        "desc": "Prepare content for the monthly newsletter",
        "date": "2025-09-10",
        "category": "Marketing",
        "active": false,
        "newtask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Stock check",
        "desc": "Cross-check current stock levels with sales",
        "date": "2025-09-11",
        "category": "Inventory",
        "active": true,
        "newtask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Supplier call",
        "desc": "Discuss delivery schedule with supplier A",
        "date": "2025-09-13",
        "category": "Supplies",
        "active": false,
        "newtask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "user": "employee",
    "name": "Sophia Brown",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Product photoshoot",
        "desc": "Take and edit photos for new arrivals",
        "date": "2025-09-05",
        "category": "Media",
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Social media post",
        "desc": "Schedule posts for Facebook and Instagram",
        "date": "2025-09-06",
        "category": "Social Media",
        "active": false,
        "newtask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Design flyer",
        "desc": "Create flyer for upcoming RV expo",
        "date": "2025-09-08",
        "category": "Design",
        "active": true,
        "newtask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Video editing",
        "desc": "Edit promotional video for YouTube channel",
        "date": "2025-09-09",
        "category": "Media",
        "active": false,
        "newtask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Logo redesign",
        "desc": "Work on updated logo concepts",
        "date": "2025-09-12",
        "category": "Design",
        "active": false,
        "newtask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "user": "employee",
    "name": "Emma Davis",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Customer feedback calls",
        "desc": "Call 10 recent customers for feedback",
        "date": "2025-09-04",
        "category": "Support",
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update product descriptions",
        "desc": "Revise text for plumbing category products",
        "date": "2025-09-08",
        "category": "Content",
        "active": false,
        "newtask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Prepare training material",
        "desc": "Draft training slides for new hires",
        "date": "2025-09-09",
        "category": "Training",
        "active": false,
        "newtask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Customer tickets",
        "desc": "Resolve pending support tickets",
        "date": "2025-09-10",
        "category": "Support",
        "active": true,
        "newtask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Internal training",
        "desc": "Conduct workshop for new CRM tool",
        "date": "2025-09-11",
        "category": "Training",
        "active": false,
        "newtask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "user": "admin",
    "name": "Admin User",
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return [ employees, admin ];
}
