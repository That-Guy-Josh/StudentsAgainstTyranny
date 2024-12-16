/* Global styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f1f1f1;
    color: #333;
    line-height: 1.6;
    transition: background-color 0.5s ease;
}

header {
    background: #222;
    padding: 10px;
    text-align: center;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: #ff5733;
}

nav ul li a.active {
    color: #ff5733;
}

main {
    padding: 20px;
    animation: fadeIn 2s ease;
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

h1, h2 {
    color: #333;
}

ul {
    margin-top: 10px;
}

ul li {
    margin-bottom: 10px;
}

select {
    padding: 10px;
    margin-top: 10px;
    width: 200px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s ease;
}

select:hover {
    border-color: #ff5733;
}

#schoolInfo {
    margin-top: 20px;
}

/* Update section styles */
.update {
    background: #fff;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* Footer styles */
footer {
    background-color: #222;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
}

/* Tab-specific styles */
.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

/* Responsive styles */
@media (max-width: 768px) {
    nav ul {
        flex-direction: column;
        padding: 20px 0;
    }

    select {
        width: 100%;
    }

    main {
        padding: 10px;
    }
}
