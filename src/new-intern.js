const newInternCard = (profile) => `

<div class="card employee-card">
    <div class="card-header bg-secondary text-white">
        <h2 class="card-title">${profile.getName()}</h2>
        <h3 class="card-title"><i class="fa-solid fa-school"></i>  ${profile.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${profile.getId()}</li>
            <li class="list-group-item">Email: <a href="${profile.getEmail()}">${profile.getEmail()}</a></li>
            <li class="list-group-item">${profile.getSchool()}</li>
        </ul>
    </div>
</div>
`;

module.exports = newInternCard;