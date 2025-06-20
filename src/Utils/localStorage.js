const Employees = [
    {
        id: 1,
        email: "ritik@gmail.com",
        password: "12345678",
        tasks: [
            {
                title: "Submit report",
                description: "Submit the weekly progress report to the manager.",
                date: "2025-06-20",
                category: "Reporting",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Team Meeting",
                description: "Attend the team sync-up meeting at 10 AM.",
                date: "2025-06-19",
                category: "Meeting",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Fix login bug",
                description: "Resolve the login issue on the production server.",
                date: "2025-06-18",
                category: "Development",
                active: false,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 2,
        email: "rishi@gmail.com",
        password: "12345678",
        tasks: [
            {
                title: "Update UI",
                description: "Update dashboard layout based on feedback.",
                date: "2025-06-21",
                category: "Design",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Code review",
                description: "Review PRs from junior developers.",
                date: "2025-06-20",
                category: "Code Review",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            }
        ]
    },
    {
        id: 3,
        email: "deepak@gmail.com",
        password: "12345678",
        tasks: [
            {
                title: "Write unit tests",
                description: "Write test cases for the new features.",
                date: "2025-06-22",
                category: "Testing",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Fix deployment issue",
                description: "Resolve the Docker container crash during deployment.",
                date: "2025-06-19",
                category: "DevOps",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                title: "Client call",
                description: "Join the call with the client to discuss requirements.",
                date: "2025-06-18",
                category: "Communication",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Prepare slide deck",
                description: "Create a presentation for the upcoming review meeting.",
                date: "2025-06-20",
                category: "Documentation",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 4,
        email: "sahil@gmail.com",
        password: "12345678",
        tasks: [
            {
                title: "Refactor codebase",
                description: "Improve code readability and structure.",
                date: "2025-06-21",
                category: "Development",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Backup database",
                description: "Perform weekly backup of the production database.",
                date: "2025-06-18",
                category: "Database",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Security audit",
                description: "Run security checks on all endpoints.",
                date: "2025-06-22",
                category: "Security",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 5,
        email: "kanak@gmail.com",
        password: "12345678",
        tasks: [
            {
                title: "Research analytics tool",
                description: "Explore analytics tools for customer behavior tracking.",
                date: "2025-06-20",
                category: "Research",
                active: false,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Customer feedback report",
                description: "Compile feedback received from customers this month.",
                date: "2025-06-18",
                category: "Customer Service",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Fix payment bug",
                description: "Resolve checkout failure during online payment.",
                date: "2025-06-17",
                category: "Bug Fixing",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                title: "Test API endpoints",
                description: "Ensure all API endpoints return correct status codes.",
                date: "2025-06-21",
                category: "Testing",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Content planning",
                description: "Draft content calendar for the next 2 weeks.",
                date: "2025-06-19",
                category: "Content",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    }
];


const Admin = [
    {
        "id": 1,
        "email": "Kundan@gmail.com",
        "password": "12345678"
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('Employees', JSON.stringify(Employees))
    localStorage.setItem('Admin', JSON.stringify(Admin))

}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('Employees'))
    const admin = JSON.parse(localStorage.getItem('Admin'))
    return { employees, admin }
}