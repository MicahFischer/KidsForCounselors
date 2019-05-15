// Generates member list
function membersList() {
    var members = ['Andrew Salgado', 'Kaiden Lansford', 'Grayson Bailey', 
    'Tori Britton', 'Jadyn Gilley', 'Jase Marler-Brown', 'Isaiah Mercaes', 'Anthony Garza', 'Angel Iid', 'Catilin Cleveland', 'Gannon Short', 'Corey Maggard', 'Genesis Medina', 'Joshua Opferbeck', 'Robert Bohon', 'Brooke Long', "Anthony Diaz", "Marcus Allen", "Eliza Cleary-Carders", "Ally Hansen", "Daniel Hogan", "Maddy Vincelette", "Carlie Bell", "Andrew Bremer", "Tatiann Gutierrez", "Jared Perez", "Aris Carroll", "Sophie Carroll", "Nate Adame", "Rocky Daond", "Anthony Bacerra", "Amir Duker", "Anthony Jacobson", "Logan Nehrbass", "Denver Horine IV", "Dr. Frasier Crane", "Hayden Bush", "Issac Perez", "Anthony Aranda", "Cavin Lincoln", "Jacob Jasmin", "Nick White", "Hailey Parner", "Jessica Meclrano", "Nathaniel Wallace", "Brownson Roanhouse", "Yadi Mendoza", "Josh Jordan", "Brett Kuhlin", "Jace Giatroudakis", "Ben Wheeler", "Natalia Sanchez", "Micah Fischer", "Chad Williams", "Cassidy Dart", "Samantha Bromfield", "Logan Martinez", "Jacob Mantoya", "Jayden Buchholz", "Preston Greep", "Eden Johnston", "Rylin VanHook", "Bailey Messer", "Kamryn Ecklid", "Savannah Schlagel", "Julie Wilson", "Jace Bylinowski", "Katie Cornado", "Spencer Erfle", "Kaity Unsworth", "Ever Carter", "Tyler Kulfan", "Joey Perez", "Dago Angulo", "Jacynda Thompson", "Connor Roselle", "Garrett Metz", "Grace Gardner" ];
  members.sort();
    document.getElementById("membercount").innerHTML = members.length;
    document.getElementById("membercountlabel").innerHTML = members.length + " Members";
  for (var i = 0; i < members.length; i++) {
    if (i !== members.length - 1) {
        document.getElementById("team").innerHTML += members[i] + ", ";
    } else {
        document.getElementById("team").innerHTML += members[i];
    }
  }
}

