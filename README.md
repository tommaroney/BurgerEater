# BurgerEater
A web application relying on a custom ORM to manage database changes originating from client input.

### Add / Remove Burgers
- Input a name for a new burger in the text field.  Click submit and the new burger is added to the databse, the page is refreshed, and the burger appears in a list of burgers waiting to be eaten.

- Click the devour button next to a burger, and the burger now appears on the other side of the screen along with other burgers that have been eaten.

- Burgers may also have their names changed by clicking on them, entering a new name, and hitting the enter key.  This is a persistent change.

#### Tools / Dependencies
- mysql manages the database with the assistance of a custom ORM
- Handlebars dynamically resolves html requests
