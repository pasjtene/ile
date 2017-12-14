<!DOCTYPE html>
<html>
<head>

    <?php require "../header.html" ?>
    <title>Admission</title>
</head>
<body>

<?php
require '../navbar.html';
?>

<div class="div2">
    <div class="text_div2">CANDIDATURE YAOUNDE</div>
    <div class="text2_div2"><a class="lien_div2" href="">ACCUEIL</a>><a class="lien_div2" href="">CANDIDATURE</a>> <span class="text_maj">CANDIDATURE A YAOUNDE</span></div>
</div>
<div class="flex-container4">
    <div class="flex1">
        <div class="candidature">
            <h2>Création de Compte</h2>
            <h3>Votre Compte</h3>
            <form id="myForm">
                <label class="form_col" for="civility">Civilité :</label>
                <select name="civility" id="civility">
                    <option value="none"> Selectionner votre Civilité</option>
                    <option value="en">Monsieur</option>
                    <option value="us">Madame</option>
                    <option value="fr">Mademoiselle</option>
                </select>
                <span class="tooltip">Merci de selectionner votre civilité</span>
                <br /><br />
                <label class="form_col" for="lastName">Nom :</label>
                <input name="lastName" id="lastName" type="text" size="30" onblur="ChangeCase(this);" />
                <span class="tooltip" >Un nom ne peut pas faire moins de deux caractères</span>
                <br /><br />
                <label class="form_col" for="firstName">Prénom :</label>
                <input name="firstName" id="firstName" type="text" size="30" onblur="ChangeCase(this);" />
                <span class="tooltip">Un prénom ne peut pas faire moins de deux caractères</span>
                <br /><br />
                <label class="form_col" for="age">Âge :</label>
                <input name="age" id="age" type="text"  size="30" />
                <span class="tooltip">L'âge doit être compris entre 15 et 100</span>
                <br /><br />
                <label class="form_col" for="Email">Email :</label>
                <input type="text" name="Email" size="30" id="Email"  />
                <br>
                <span class="tooltip">le format l'adresse doit etre valide  (exp., nom@coolexample.com). Essayez encore svp.</span>
                <br /><br />
                <label class="form_col" for="Email2">Email(confirmation) :</label>
                <input name="Email2" id="Email2" type="text" size="30" />
                <br>
                <span class="tooltip">L'adresse email de confirmation doit etre identique à celui d'origine</span>
                <br /><br />
                <label class="form_col" for="password">Mot de passe :</label>
                <input name="Pdw1" id="password" type="password" size="30" />
                <br>
                <span class="tooltip">Un mot de passe  ne peut pas faire moins de six caractères</span>
                <br /><br />
                <label class="form_col" for="confirm-password">Mot de passe (confirmation) :</label>
                <input name="Pdw2" id="confirm-password" type="password" size="30" />
                <br>
                <span class="tooltip">le  mot de passe de confirmation doit etre identique
                à celui d'origine</span>
                <br /><br />
                <span class="form_col"></span>
                <input  id="inscription_buton" class="bouton" type="submit" value="M'inscrire">
                <input class="bouton" type="reset" value="Réinitialiser le formulaire">
            </form>
        </div>
    </div>
    <div class="flex2">
        <h2>Connexion au Compte</h2>
        <h3>Veuilllez renseigner vos informations!</h3>

        <label class="form_col" for="Email">Email :</label>
        <input name="Email" id="Email3" type="text" size="30" />
        <br>
        <span class="tooltip">Une adresse email doit contenir obligatoirement @</span>
        <br /><br />
        <label class="form_col" for="Pdw3">Mot de passe :</label>
        <input name="Pdw1" id="Pdw3" type="password" size="30" />
        <br>
        <span class="tooltip">Un mot de passe  ne peut pas faire moins de six caractères</span>
        <br /><br />
        <span class="form_col"></span>
        <input class="bouton" type="submit" value="Connexion">
    </div>
</div>


<?php
require '../footer.html';
?>

</body>
<script src="../Resources/js/inscription.js"></script>
</html>