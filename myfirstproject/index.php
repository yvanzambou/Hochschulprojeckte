<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title></title>

		<style>
			body {
				font-family: 'Helvetica', sans-serif;
				background-color: #eaedf8;
				margin: 0;
			}

			.footer {
				padding: 50px;
				text-align: center;
				background-color: #343434;
				color: #fff;
				font-size: 20px;
				margin-top: 300px;
			}

			.main {
				display: flex;
			}

			.menu {
				width: 20%;
				background-color: #746cf5;
				margin-right: 32px;
				padding-top: 150px;
				height: 100vh;
			}

			.content {
				width: 80%;
				margin-top: 120px;
				margin-right: 32px;
				background-color: #fff;
				border-radius: 8px;
				padding: 16px;
				box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);

			}

			.menu a {
				display: block;
				text-decoration: none;
				color: #fff;
				padding: 8px;
				display: flex;
				align-items: center;
			}

			.menu img {
				margin-right: 8px;
			}

			.menu a:hover {
				background-color: rgba(255, 255, 255, 0.5);
				color: black;
			}

			.menu_bar {
				background-color: #fff;
				position: absolute;
				top: 0;
				right: 0;
				left: 0;
				height: 80px;
				box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
				padding-left: 80px;
				display: flex;
				justify-content: space-between;
			}

			.avatar {
				border-radius: 100%;
				background-color: yellowgreen;
				padding: 16px;
				width: 15px;
				height: 15px;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-right: 8px;
			}

			.myname {
				display: flex;
				margin-right: 50px;
				align-items: center; /* auf die Y-Achse zentrieren */
			}

			.card {
				height: 50px;
				background-color: rgba(0, 0, 0, 0.1);
				margin-bottom: 8px;
				border-radius: 8px;
				display: flex;
				align-items: center;
				position: relative;
			}

			.profile_picture {
				margin-left: 10px;
				margin-right: 10px;
				width: 30px;
				border-radius: 5px;
				border: 2px solid #fff;
			}

			.call {
				background-color: green;
				padding: 5px;
				border-radius: 5px;
			}

			.delete {
				background-color: red;
				padding: 5px;
				border-radius: 5px;
			}

			.call:hover {
				background-color: rgba(0, 255, 0, 1.0);
			}

			.delete:hover {
				background-color: rgba(255, 0, 0, 0.6);
			}

			.call, .delete {
				margin-left: 10px;
			}

			.call a, .delete a {
				text-decoration: none;
				color: white;
			}

			.btns {
				position: absolute;
				right: 10px;
				display: flex;
			}

			.numberOfContact {
				display: flex;
				position: relative;
			}
			.numberContact {
				position: absolute;
				right: 10px;
				top: 5px;
			}

			button {
				padding: 7px;
				font-size: 18px;
			}
		</style>
	</head>
	<body>
		<div class="menu_bar">
			<h1>Mein Telefonbuch</h1>
			<div class="myname">
				<div class="avatar">YZ</div> Yvan ZAMBOU
			</div>
		</div>

		<div class="main">
			<div class="menu">
				<a href="index.php?page=start"><img src="img/home.svg">Start</a>
				<a href="index.php?page=contacts"><img src="img/book.svg">Kontakte</a>
				<a href="index.php?page=addcontacts"><img src="img/add.svg">Kontakte hinzufügen</a>
				<a href="index.php?page=legal"><img src="img/legal.svg">Impressum</a>
			</div>

			<div class="content">
				<!-- PHP-Code -->
				<?php
					$headline = 'Herzlich Willkommen';
					$contacts = [];
					$index = 0;

					if(file_exists('contacts.txt')) {
						$file_content = file_get_contents('contacts.txt', true);
						$contacts = json_decode($file_content, true);
					}


					if(isset($_POST['name']) && isset($_POST['phone'])) {
						echo '<p><b>'.$_POST["name"].'</b> wurde erfolgreich hinzufügt</p>';
						$newContact = [
							'name' => $_POST['name'],
							'phone' => $_POST['phone']
						];

						array_push($contacts, $newContact);
						file_put_contents('contacts.txt', json_encode($contacts, JSON_PRETTY_PRINT));
					}

					if($_GET['page'] == 'contacts') {
						$headline = 'Deine Kontakte';
					}

					if($_GET['page'] == 'addcontacts') {
						$headline = 'Kontakt hinzufügen';
					}

					if($_GET['page'] == 'legal') {
						$headline = 'Impressum';
					}

					if($_GET['page'] == 'delete') {
						$headline = 'Gelöschte Kontakte';
					}

					echo '<h1>'.$headline.'</h1>';

					if($_GET['page'] == 'contacts') {
						$numberOfContact = count($contacts);
						echo '
							<div class="numberOfContact">
								<p>Hier hast du einen Überblick über alle deine <b>Kontakte</b>.</p>
								<p class="numberContact">'.$numberOfContact.' Kontakt(e)<p/>
							</div>
						';

						foreach ($contacts as $index=>$row) {
							$name = $row['name'];
							$phone = $row['phone'];
							echo "
							<div class='card'>
								<img class='profile_picture' src='img/profile_picture.webp'>
								<div>
									<b>$name</b></br>
									$phone
								</div>
								<div class='btns'>
									<div class='call'>
									<a href='tel:$phone'>Anrufen</a>
									</div>
									<div class='delete'>
										<a href='index.php?page=delete&delete=$index'>Löschen</a>
									</div>
								</div>
							</div>";
						}

					} else if($_GET['page'] == 'legal') {
						echo '
							Alle Ihre Kontakte sind streng geheim und werden deswegen nicht an dritte weitergegeben :)
						';
					} else if($_GET['page'] == 'delete') {
						$deleteContact = $contacts[$_GET['delete']];

						$file_content = file_get_contents('contacts.txt', true);
						$contacts = json_decode($file_content, true);
						foreach ($contacts as $index=>$row) {
							if($index == $_GET['delete']) {
								unset($contacts[$index]);
							}
						}
						file_put_contents('contacts.txt', json_encode($contacts, JSON_PRETTY_PRINT));
						echo '
							<b>'.$deleteContact['name'].'</b> wurde erfolgreich gelöscht.</br></br>
							<a href="index.php?page=contacts"><button>Zurück zu den Kontakten</button></a>
						';
					} else if($_GET['page'] == 'addcontacts') {
						echo '
							<div>
								Hier kannst du einen neuen Kontakt hinzufügen.
							</div>
							</br>

							<form action="?page=contacts" method="POST">

								<label>Name: </label>
								<input name="name"></br></br>

								<label>Telefonnummer: </label>
								<input name="phone"></br></br>

								<button type="submit">Speichern</button>

							</form>
						';
					} else {
						echo '
							Diese Seite ist ein Online-Telefonbuch, wo du deine Kontakte verwalten kannst. Viel Spaß!
						';
					}
				?>
				<!-- PHP-Code -->
			</div>
		</div>
		<div class="footer">
			Copyright 2023 | All rights reserved | Yvan ZAMBOU
		</div>
	</body>
</html>