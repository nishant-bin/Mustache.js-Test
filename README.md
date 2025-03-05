# 1.Sections ({{#section}} and {{^section}})

Mustache uses sections for conditional rendering and looping.
## ✅ Example 1: Looping Through an Array


```
const template = `
    <h2>Users List</h2>
    <ul>
        {{#users}}
            <li>{{name}} - {{email}}</li>
        {{/users}}
    </ul>
`;

const data = {
    users: [
        { name: "Alice", email: "alice@example.com" },
        { name: "Bob", email: "bob@example.com" }
    ]
};

console.log(Mustache.render(template, data));
```

## 📝 Output:

  ```
<h2>Users List</h2>
<ul>
    <li>Alice - alice@example.com</li>
    <li>Bob - bob@example.com</li>
</ul>

```

## ✅ Example 2: Conditional Rendering

You can conditionally show or hide elements based on the data.
```
const template = `
    {{#isAdmin}}
        <p>Welcome, Admin!</p>
    {{/isAdmin}}
    {{^isAdmin}}
        <p>You are a regular user.</p>
    {{/isAdmin}}
`;

const data1 = { isAdmin: true };
const data2 = { isAdmin: false };

console.log(Mustache.render(template, data1)); // Shows: "Welcome, Admin!"
console.log(Mustache.render(template, data2)); // Shows: "You are a regular user."
```

# 🔹 2. Using {{.}} for Iteration

## If you only have an array of values (not objects), {{.}} lets you directly access each item.

```
const template = `
    <ul>
        {{#fruits}}
            <li>{{.}}</li>
        {{/fruits}}
    </ul>
`;

const data = { fruits: ["Apple", "Banana", "Cherry"] };

console.log(Mustache.render(template, data));

```

## 📝 Output:

```
<ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
</ul>

```
You can use Object.assign() or the spread operator (...) to combine multiple objects before passing them.


## 🔹 Example 1: Merging Two Objects

```
const template = `
    <h1>{{title}}</h1>
    <p>User: {{user.name}}, Age: {{user.age}}</p>
    <p>Location: {{location.city}}, {{location.country}}</p>
`;

const userData = { user: { name: "Alice", age: 25 } };
const locationData = { location: { city: "New York", country: "USA" } };

// Merge objects
const mergedData = { ...userData, ...locationData };

console.log(Mustache.render(template, mergedData));


```


## 📝 Output:


```
<h1></h1>
<p>User: Alice, Age: 25</p>
<p>Location: New York, USA</p>


```


