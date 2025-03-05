// Mustache Template with Conditional Rendering and Dynamic Classes
const template = `
    <h2>Users List</h2>
    <ul>
        {{#users}}
            <li class="{{#active}}active{{/active}}{{^active}}inactive{{/active}}">
                {{name}} - {{email}}
                {{#active}}✅ Active{{/active}}
                {{^active}}❌ Inactive{{/active}}
            </li>
        {{/users}}
        {{^users}}
            <p>No users found.</p>
        {{/users}}
    </ul>
`;

// Fetch Data from API
async function fetchUsers() {
    document.getElementById("user-container").innerHTML = "Fetching users...";
   try {
    const response=await fetch("https://jsonplaceholder.typicode.com/users") // Example API
    const data=await response.json();
            // Add a new property 'active' randomly for demo purposes
            const modifiedData = data.map(user => ({
                ...user,
                active: Math.random() > 0.5 // Randomly assign active/inactive
            }));

            // Prepare Data for Mustache
            // const userData = { users: modifiedData };
            let add= { userData: function(){
                return { users: modifiedData };
            }}
            // Render Template with Data
            // const output = Mustache.render(template, userData);
            const output = Mustache.render(template, add.userData());

            // Insert Rendered Output into HTML
            document.getElementById("user-container").innerHTML = output;
        }catch (error) {
                console.error("Error fetching users:", error);
                document.getElementById("user-container").innerHTML = "<p>Failed to load users.</p>";
             
            };
}

// Add Click Event Listener to Button
document.getElementById("loadUsersBtn").addEventListener("click", fetchUsers);
