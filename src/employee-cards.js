const employeeNewCards = (newCards) => `

<!DOCTYPE html>
<html lang="en">
  <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">        <script src="https://kit.fontawesome.com/dca79e95c9.js" crossorigin="anonymous"></script>
        <link rel = "stylesheet" href = "/assets/style.css">
    </head>
  
    <body>
        <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 team-heading bg-dark">
                        <h1 class="display-1 text-center text-white">The Office Team</h1>
                    </div>
                </div>
            <div class="container">
                <div class="row">
                    <div class="row team-area col-12 d-flex justify-content-center">
                        ${newCards}
                    </div>
                    <div class="card employee-card">
                    <div class="card-header bg-secondary text-white">
                        <h2 class="card-title">Michael Scott</h2>
                        <h3 class="card-title"><i class="fa-solid fa-mug-hot"></i>  Manager</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: 1</li>
                            <li class="list-group-item">Email: <a href="mailto:mscott@dundermifflin.com">mscott@dundermifflin.com</a></li>
                            <li class="list-group-item">Office number: 1</li>
                        </ul>
                    </div>
                </div>
        
                </div>
        </div>
    </body>
</html>  
`;

module.exports = employeeNewCards;