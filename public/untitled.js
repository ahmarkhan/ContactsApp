name : "Ahmar",email : "email#email.com",contact : "222-222"

 db.test.insert({name : "Ahmar",email : "email#email.com",contact : "222-222"});
 db.contactlist.insert({name : "Ahmar",email : "email#email.com",contact : "222-222"});
 db.contacts.insert({name : "Ahmar",email : "email#email.com",contact : "222-222"});


 db.contacts.deleteMany({ _id : '57b02ce4c4a89a3cc9f10370'},{ _id : "57b02ce4c4a89a3cc9f10371" },{ _id : "57b02ce4c4a89a3cc9f10372" },{ _id : "57b02ce4c4a89a3cc9f10373" },{ _id : "57b02ce4c4a89a3cc9f10374" },{ _id : "57b02ce4c4a89a3cc9f10375"});
