var members = ['Andrew Salgado', 'Kaiden Lansford', 'Grayson Bailey', 
'Tori Britton', 'Jadyn Gilley', 'Jase Marler-Brown', 'Isaiah Mercaes', 'Anthony Garza', 'Angel Iid', 'Catilin Cleveland', 'Gannon Short', 'Corey Maggard', 'Genesis Medina', 'Joshua Opferbeck', 'Robert Bohon', 'Brooke Long', "Anthony Diaz", "Marcus Allen", "Eliza Cleary-Carders", "Ally Hansen", "Daniel Hogan", "Maddy Vincelette", "Carlie Bell", "Andrew Bremer", "Tatianna Gutierrez", "Jared Perez", "Aris Carroll", "Sophie Carroll", "Nate Adame", "Rocky Daond", "Anthony Bacerra", "Amir Duker", "Anthony Jacobson", "Logan Nehrbass", "Denver Horine IV", "Hayden Bush", "Issac Perez", "Anthony Aranda", "Cavin Lincoln", "Jacob Jasmin", "Nick White", "Hailey Parner", "Jessica Meclrano", "Nathaniel Wallace", "Brownson Roanhouse", "Yadi Mendoza", "Josh Jordan", "Brett Kuhlin", "Jace Giatroudakis", "Ben Wheeler", "Natalia Sanchez", "Chad Williams", "Micah Fischer", "Cassidy Dart", "Samantha Bromfield", "Logan Martinez", "Jacob Mantoya", "Jayden Buchholz", "Preston Greep", "Eden Johnston", "Rylin VanHook", "Bailey Messer", "Kamryn Ecklid", "Savannah Schlagel", "Julie Wilson", "Jace Bylinowski", "Katie Cornado", "Spencer Erfle", "Kaity Unsworth", "Ever Carter", "Tyler Kulfan", "Joey Perez", "Dago Angulo", "Jacynda Thompson", "Connor Roselle", "Garrett Metz", "Grace Gardner", "Richard Kaczynski", "Angella Valdez", "Gabe Ingram", "Natalie Yost", "Ahjah Edmonds", "Kyle Presley", "Luaren Ponsford", "Sarahi Padilla", "Maddy Davis", "Yilmaz Onat", "Nicc Oliphint", "Elijah Johnson", "Luke Wise", "Haylie Woords", "Rudy Byron", "Kimberly Callejas", "Austin Long", "Samuel Barry", "Tara Whittaker", "Allessandra Directo", "Dylan Cherwinski", "Andrew Valdez", "Tyler Conway", "Joseph Colmone", "Aiden Ploughe", "Jacob Ploughe", "Kevin Jackson" ];


function membersList() {
  members.sort();
    document.getElementById("membercount").innerHTML = members.length;
    document.getElementById("membercount2").innerHTML = members.length;
  for (var i = 0; i < members.length; i++) {
    if (i !== members.length - 1) {
        document.getElementById("members").innerHTML += "<li>" + members[i] + "</li>";
    } else {
        document.getElementById("members").innerHTML += "<li>" + members[i] + "</li>";
    }
  }
}
