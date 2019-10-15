// ~~~~~~~~~~~~~~~~ RPG GameStart Code ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// # Pseudocode for the gmae
/*
    Section A. - Character Select and DOM Manipulation for the game to start. (Game overview pseudocode)
    A.1. = First I want to give the the character when hovered over, that the picture gets a little bigger. So that the user knows who they are chosing.
    A.2. = Once the user chooses what character they want, The interface will change so that all the other characters go down another row.
    A.3. = From there the user will be asked to choose 4 oppoenents.
    A.4. = After that the other options will disappear and the user's character and the 4 opponents will be listed on the bottom right.
        A.4.1 - Once the battle has started the user will fight the battle in the order of enemeies he selected.
        A.4.2 - Once the battle has started when the opponents die they disappear
        A.4.3. - If the user's character's HP reaches zero alert game over.

    Section B. - "Game on" (game detail pseudocode)
    B.1. = The UI comes up, and the opponent has 5 options:
        - Saber Vertical = Vertical Slash / 50% of attack power
        - Saber Horizontal = Horizontal Slash 30% of attack power
        - Force Attack = Force Choke / consumes 100F / 75% of attack power
        - Force Defend = Force Push / consumes 75F / 65% of Attack Power
        - Saber Counter = Counters both saber attacks; doesn nothing against force attacks / takes the saber attack and adds 30% of the users AtkPowr
        - Force Counter = Counters both Force attacks; does nothing against saber attacks / takes the force attack and adds 20% of the users AtkPower/ consumes 150F

    B.2. = The Counter Equations are as follows:
        - Saber Vertical x= Saber Vertical
        - Saber Vertical = Saber Horizontal
        - Saber Vertical < Force Attack
        - Saber Vertical < Force Defend
        - Saber Vertical < Saber counter
        - Saber Vertical > Force Counter


        - Saber Horizontal x= Saber Horizontal
        - Saber Horizontal = Vertical
        - Saber Horizontal < Force Attack
        - Saber Horizontal < Force Defend
        - Saber Horizontal < Saber Counter
        - Saber Horizontal > Force Counter


        - Force Attack x= Force Attack
        - Force Attack = Force Defend
        - Force Attack > Saber Vertical
        - Force Attack > Saber Horizontal
        - Force Attack < Force Counter
        - Force Attack > Saber Counter

        - Force Defend = Force Defend
        - Force Defend = Force Attack
        - Force Defend > Saber Vertical
        - Force Defend > Saber Horizontal
        - Force Defend < Force Counter
        - Force Defend > Saber Counter

        - Saber Counter null Saber Counter
        - Saber Counter null Force Counter
        - Saber Counter > Saber Vertical
        - Saber Counter > Saber Vertical
        - Saber Counter < Force Attack
        - Saber Counter < Force Defend

        - Force Counter null Force Counter
        - Force Counter null Saber Counter
        - Force Counter > Force Attack
        - Force Counter > Force Defend
        - Force Counter < Saber Vertical
        - Force Counter < Saber Horizontal





    Section C - Directions how I am going to write the code:

    C.1. - Create the code for movement before, during, and after the game. // It can be separated where need be when need be
    C.2. - Create Objects for the characters and their stats
    C.3. - Create Objects for the user options once the battle has started
    C.4. - Create the "rules" for the gameplay specifically
    C.5. - Create the "conditions" for the saber, force, and counter options
    C.6. - Create a while loop for all possible combinations instead of using an a for loop and tons of if statements.
    C.7. - Create a function that says once the enemies HP goes down to 0 then that character will be removed from the page.
    C.8. - Create a function that says once all 4 enemies have been removed, an alert comes up that says you win, then an option to play again in which a new function needs to be created to reset the game. If not, then takes the user back to the homepage.

    C.x. - Use Jumbo tron to old UI options and show what computer chooses using the .Mathrandom property.
    C.x. -






    */