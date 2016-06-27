<!--#include virtual="/includes/motor/inicio.asp"-->
<!--#include virtual="/includes/motor/SSL.asp"-->
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Nueva SuperStudio</title>
	<link rel="apple-touch-icon" sizes="57x57" href="imagenes/iconos/favicon/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="imagenes/iconos/favicon/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="imagenes/iconos/favicon/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="imagenes/iconos/favicon/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="imagenes/iconos/favicon/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="imagenes/iconos/favicon/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="imagenes/iconos/favicon/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="imagenes/iconos/favicon/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="imagenes/iconos/favicon/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192"  href="imagenes/iconos/favicon/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="imagenes/iconos/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="imagenes/iconos/favicon/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="imagenes/iconos/favicon/favicon-16x16.png">
	<link rel="manifest" href="/manifest.json">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
	<link href='https://fonts.googleapis.com/css?family=Titillium+Web:400,700,300' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="includes/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/7.1.0/css/bootstrap-slider.min.css">
    <link rel="stylesheet" href="includes/css/animate.min.css">
    <link rel="stylesheet" href="includes/css/superestudio.css">
</head>
<body class="category-page">

<div id="spin"></div>

<!-- Topbar -->
<div class="topbar">
	<div class="container">
		<div class="row">
			<div class="col-md-6 col-lg-7 left">
				<div class="llamamos">
					<span>Te llamamos</span>
					<div class="select">
						<input type="text" name="telefono" placeholder="Nº de teléfono">
						<input type="text" name="nombre" placeholder="Nombre">
						<input type="text" name="email" placeholder="Correo electrónico">
						<a href="javascript:void(0)" class="showFranjaHoraria">¿Quieres especificar franja horaria?</a>
						<div class="franjaHoraria">
							<label><input type="checkbox"> Por la mañana</label>
							<label><input type="checkbox"> Por la tarde</label>
						</div>
						<button type="submit">Enviar</button>
					</div>
				</div>
				<a href="#">Enviamos a toda Europa</a>
				<a href="#">Tiendas</a>
				<a href="#">Devoluciones</a>
				<a href="#">Contacto</a>
			</div>
			<div class="col-md-6 col-lg-5 right">
				<a href="#"><img src="imagenes/iconos/svg/telefono.svg" alt="">&nbsp;&nbsp;(+34) 932 417 330</a>
				<a href="#" class="text-bold">Contacto</a>
				<a href="#" class="text-bold">Iniciar sesión</a>
				<div class="language">
					<span>ES</span>
					<div class="select">
						<a href="https://www.superestudio.com?idioma=CAS">Castellano</a>
						<a href="https://www.superestudio.com?idioma=ENG">English</a>
						<a href="http://www.superestudio.fr/?idioma=FRA">Français</a>
						<a href="http://www.superestudio.de/?idioma=DEU">Deutsch</a>
						<a href="http://www.superestudio.pt/?idioma=POR">Português</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<nav class="navbar navbar-default topmenu">
	<div class="container">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="default.asp">
				<img class="logotipo animated bounceIn" src="imagenes/logo.png" width="145" height="56" alt="SuperStudio">
				<img class="logotipo collapsed animated flip" src="imagenes/logo-mini.png" width="66" height="40" alt="SuperStudio">
			</a>
			<a class="btn-cart" href="javascript:void(0)">
				<img src="imagenes/iconos/svg/topmenuCarrito.svg" alt="#">
				<span class="badge">13</span>
			</a>
		</div>

		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav">
				<li class="dropdown">
					<a href="#" id="showMenu" class="dropdown-toggle categorias" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Categorías
						<div class="icon-menu">
							<img src="imagenes/iconos/svg/categorias.svg" width="44" height="44" alt="">
							<div class="icon-menu-wave"></div>
						</div>
					</a>
					
					<div class="subcategorias">
						<a href="#" class="rojo">Promociones</a>
						<a href="#" class="azul">Diseñadores</a>
						<a href="#" class="verde">Colecciones</a>
						<a href="#" class="naranja">Estilos</a>
					</div>

					<ul class="dropdown-menu menu-subcategorias" id="menuSubcategorias">
						<div class="header">
							<div class="container">
								<button type="button" class="close"><span aria-hidden="true">&times;</span></button>
								<div class="title">Selecciona una categoria</div>
							</div>
						</div>
						<li>
							<a href="javascript:void(0);" class="category sub" data-tipo="sillas">
								<img src="imagenes/iconos/svg/menuSillas.svg" alt="">
								<div class="text">Sillas<span class="glyphicon glyphicon-menu-down"></span></div>
							</a>
							<!-- SUBMENU Sillas -->
							<div class="submenu" id="sillas">
								<div class="container">
									<div class="left">
										<div class="text">
											Sillas
										</div>
										<div class="row">
											<div class="col-sm-4">
												<a href="#" class="item" data-feature-link="/silla-dsw-wooden-polipropileno-eames-baz004" data-feature-title="Silla WOODEN -Polipropileno-" data-feature-desc="Silla de diseño de estilo Tower para cocina o comedor" data-feature-img="https://www.superestudio.com/imagenes/productos/BAZ004/BAZ0041.jpg">Sillas iconos del diseño <span>(201)</span></a>
												<a href="#" class="item" data-feature-link="/silla-wooden-polipropileno-eames" data-feature-title="Silla WOODEN -Polipropileno-" data-feature-desc="Silla de diseño de estilo Tower para cocina o comedor" data-feature-img="https://www.superestudio.com/imagenes/productos/SHX014/11/SHX014-11_1.jpg">Sillas de plástico con patas de madera <span>(31)</span></a>
												<a href="#" class="item" data-feature-link="/sillas_plegables_silla_plex_144331" data-feature-title="Silla PLEX" data-feature-desc="Perfecta como silla auxiliar cuando tengas invitados en casa." data-feature-img="https://www.superestudio.com/imagenes/productos/SHX030/SHX0301.jpg">Sillas plegables <span>(64)</span></a>
												<a href="#" class="item" data-feature-link="/silla-dsw-baby-wooden--baby-eames" data-feature-title="Silla BABY WOODEN" data-feature-desc="Versión de menor tamaño de la Silla WOODEN, para niños" data-feature-img="https://www.superestudio.com/imagenes/productos/BAZ009/BAZ0091.jpg">Sillas baby <span>(64)</span></a>
												<a href="#" class="item" data-feature-link="/puff-ferret-polyester-version-wv0007" data-feature-title="Puff FERRET -Polyester Version-" data-feature-desc="elemento decorativo original y muy divertido" data-feature-img="https://www.superestudio.com/imagenes/productos/WV0007/WV00071.jpg">Puffs <span>(7)</span></a>
												<a href="#" class="item" data-feature-link="/silla-terek-metal-cepillado-jean-pauchard" data-feature-title="Silla TEREK -Metal Cepillado-" data-feature-desc="Aporta un toque moderno con una silla Terek" data-feature-img="https://www.superestudio.com/imagenes/productos/ANY013/127/ANY013-127_1.jpg">Sillas metálicas <span>(39)</span></a>
												<a href="#" class="item" data-feature-link="/silla-beech-tulipa" data-feature-title="Silla BEECH TULIPA" data-feature-desc="Silla de comedor muy confortable" data-feature-img="https://www.superestudio.com/imagenes/productos/FNG001/FNG0011.jpg">Sillas tapizadas <span>(4)</span></a>
												<a href="#" class="item" data-feature-link="/silla-acapulco-chair-color-edition" data-feature-title="Silla MÉXICO -Color Edition-" data-feature-desc="Silla Acapulco, durabilidad, calidad y diseño" data-feature-img="https://www.superestudio.com/imagenes/productos/WIW003/WIW0031.jpg">Sillas para exterior <span>(1)</span></a>
												<a href="#" class="item" data-feature-link="/banco-eco-batten" data-feature-title="Banco ECO BATTEN" data-feature-desc="Inspirado en el Banco Platform de George Nelson" data-feature-img="https://www.superestudio.com/imagenes/productos/XSG027/38/XSG027-38_1.jpg">Bancos <span>(1)</span></a>
											</div>
											<div class="col-sm-4">
												<a href="#" class="item" data-feature-link="/silla-beech-tulipa" data-feature-title="Silla BEECH TULIPA" data-feature-desc="Silla de comedor muy confortable" data-feature-img="https://www.superestudio.com/imagenes/productos/FNG001/FNG0011.jpg">Sillas de madera <span>(47)</span></a>
												<a href="#" class="item" data-feature-link="/silla-de-oficina-pring" data-feature-title="Silla de Oficina PRING" data-feature-desc="Silla de Oficina PRING, inspiración Eames Pacc" data-feature-img="https://www.superestudio.com/imagenes/productos/311/3111.jpg">Sillas de oficina <span>(10)</span></a>
												<a href="#" class="item" data-feature-link="/silla-terek-metal-cepillado-jean-pauchard" data-feature-title="Silla TEREK -Metal Cepillado-" data-feature-desc="Aporta un toque moderno con una silla Terek" data-feature-img="https://www.superestudio.com/imagenes/productos/ANY013/127/ANY013-127_1.jpg">Sillas apilables <span>(22)</span></a>
												<a href="#" class="item" data-feature-link="/silla-ball-eero-aarnio" data-feature-title="Silla en Miniatura DIDI" data-feature-desc="Silla en miniatura, inspirada en la Silla Ball de Eero Aarnio." data-feature-img="https://www.superestudio.com/imagenes/productos/FYD010/24293/FYD010-24293_1.jpg">Sillas mini decorativas <span>(22)</span></a>
												<a href="#" class="item" data-feature-link="/silla-wooden-polipropileno-eames" data-feature-title="Silla WOODEN -Polipropileno-" data-feature-desc="Silla de diseño de estilo Tower para cocina o comedor" data-feature-img="https://www.superestudio.com/imagenes/productos/SHX014/11/SHX014-11_1.jpg">Sillas de plástico<span>(39)</span></a>
												<a href="#" class="item" data-feature-link="/silla-wooden-arms-patchwork-edition-charles-ray-eames" data-feature-title="Silla WOODEN ARMS -Patchwork Edition-" data-feature-desc="Diseño y comodidad se unen en la Silla DAW" data-feature-img="https://www.superestudio.com/imagenes/productos/TDF011/87/TDF011-87_1.jpg">Sillas patchwork <span>(4)</span></a>
												<a href="#" class="item" data-feature-link="/silla-rar-eames" data-feature-title="Silla Balancín TOWER ARMS" data-feature-desc="Silla RAR Eames ideal para relajarse en el hogar" data-feature-img="https://www.superestudio.com/imagenes/productos/SHX018/SHX0181.jpg">Sillas balancín <span>(1)</span></a>
												<a href="#" class="item" data-feature-link="/sillon-bantra-wood-charles-ray-eames" data-feature-title="Sillón BANTRA WOOD" data-feature-desc="Sillón confortable con diseño elegante y funcional" data-feature-img="https://www.superestudio.com/imagenes/productos/ZSF002/ZSF0021.jpg">Sillones <span>(46)</span></a>
											</div>
											<div class="col-sm-4 hidden-xs">
												<a class="promo-menu" href="/silla-wooden-polipropileno-eames" title="Silla WOODEN -Polipropileno-">
													<div class="featuring-menu-title">Destacamos:</div>
													<span class="promo-title">Silla WOODEN -Polipropileno-</span>
													<div class="promo-description">Silla de diseño de estilo Tower para cocina o comedor.</div>
													<div class="promo-image">
														<img class="featured-product-image" src="https://www.superestudio.com/imagenes/productos/SHX014/min/categoria/SHX0141.jpg" width="150" alt="Silla WOODEN -Polipropileno-"/>
													</div>
												</a>
											</div>
										</div>
										<div class="text col-md-12">
											<a href="#" class="btn btn-secondary btn-sm btn-rounded">Ver todas las sillas</a>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<a href="javascript:void(0)" class="category" data-tipo="taburetes">
								<img src="imagenes/iconos/svg/menuTaburetes.svg" alt="">
								<div class="text">Taburetes</div>
							</a>
							<!-- SUBMENU Taburetes -->
							<div class="submenu" id="taburetes">
								<div class="container">
									<div class="left">
										<div class="text">
											Taburetes
										</div>
										<div class="row">
											<div class="col-sm-4 col-sm-offset-4 hidden-xs">
												<a class="promo-menu" href="/silla-wooden-polipropileno-eames" title="Taburete HIGHT URAL -Metal Cepillado">
													<div class="featuring-menu-title">Destacamos:</div>
													<span class="promo-title">Taburete HIGHT URAL -Metal Cepillado-</span>
													<div class="promo-description">Taburete metálico en estilo industrial.</div>
													<div class="promo-image">
														<img src="https://www.superestudio.com/imagenes/productos/ANY017/min/categoria/ANY0171.jpg" width="150" alt="Taburete HIGHT URAL -Metal Cepillado"/>
													</div>
												</a>
											</div>
										</div>
										<div class="text col-md-12">
											<a href="#" class="btn btn-secondary btn-sm btn-rounded">Ver todos los taburetes</a>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<a href="javascript:void(0)" class="category sub" data-tipo="mesas">
								<img src="imagenes/iconos/svg/menuMesas.svg" alt="">
								<div class="text">Mesas<span class="glyphicon glyphicon-menu-down"></span></div>
							</a>
							<!-- SUBMENU Mesas -->
							<div class="submenu" id="mesas">
								<div class="container">
									<div class="left">
										<div class="text">
											Mesas
										</div>
										<div class="row">
											<div class="col-sm-4">
												<a href="#" class="item">Mesas de comedor <span>(57)</span></a>
												<a href="#" class="item">Mesas de oficina <span>(31)</span></a>
												<a href="#" class="item">Mesas de centro <span>(64)</span></a>
												<a href="#" class="item">Mesas de exterior <span>(4)</span></a>
												<a href="#" class="item">Mobiliario de oficina <span>(1)</span></a>
											</div>
											<div class="col-sm-4">
												<a href="#" class="item">Mesitas de café <span>(47)</span></a>
												<a href="#" class="item">Mesas de bar <span>(10)</span></a>
												<a href="#" class="item">Mesas de TV <span>(39)</span></a>
												<a href="#" class="item">Barras <span>(39)</span></a>
												<a href="#" class="item">Consolas <span>(4)</span></a>
											</div>
											<div class="col-sm-4 hidden-xs">
												<a class="promo-menu" href="/mesa-dsw-tendar-wood-120-tendar-wood-eames">
													<div class="featuring-menu-title">Destacamos:</div>
													<span class="promo-title">Mesa TENDAR WOOD 120</span>
													<div class="promo-description">Mesa de comedor inspirada en diseño de la Mesa DSW de Charles & Ray Eames.</div>
													<div class="promo-image">
														<img src="https://www.superestudio.com/imagenes/productos/SHX022/SHX0221.jpg" width="150" alt="Mesa TENDAR WOOD 120"/>
													</div>
												</a>
											</div>
										</div>
										<div class="text col-md-12">
											<a href="#" class="btn btn-secondary btn-sm btn-rounded">Ver todas las mesas</a>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<a href="javascript:void(0)" class="category sub" data-tipo="lamparas">
								<img src="imagenes/iconos/svg/menuLamparas.svg" alt="">
								<div class="text">Lámparas<span class="glyphicon glyphicon-menu-down"></span></div>
							</a>
							<!-- SUBMENU Lámparas -->
							<div class="submenu" id="lamparas">
								<div class="container">
									<div class="left">
										<div class="text">
											Lámparas
										</div>
										<div class="row">
											<div class="col-sm-4">
												<a href="#" class="item">Lámparas en suspensión <span>(57)</span></a>
												<a href="#" class="item">Lámparas de sobremesa <span>(23)</span></a>
												<a href="#" class="item">Apliques <span>(4)</span></a>
												<a href="#" class="item">Bombillas <span>(13)</span></a>
											</div>
											<div class="col-sm-4">
												<a href="#" class="item">Lámparas de pie <span>(47)</span></a>
												<a href="#" class="item">Lámparas de oficina <span>(82)</span></a>
												<a href="#" class="item">Iluminación creativa <span>(39)</span></a>
											</div>
											<div class="col-sm-4 hidden-xs">
												<a class="promo-menu" href="/lampara-amsti" title="Lámpara AMSTI">
													<div class="featuring-menu-title">Destacamos:</div>
													<span class="promo-title">Lámpara AMSTI</span>
													<div class="promo-description">Lámpara en acero tintado en negro con interior dorado.</div>
													<div class="promo-image">
														<img src="https://www.superestudio.com/imagenes/productos/BV0003/min/categoria/BV00031.jpg" width="150" alt="Lámpara AMSTI"/>
													</div>
												</a>
											</div>
										</div>
										<div class="text col-md-12">
											<a href="#" class="btn btn-secondary btn-sm btn-rounded">Ver todas las lámparas</a>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<a href="javascript:void(0)" class="category sub" data-tipo="sofas">
								<img src="imagenes/iconos/svg/menuSofas.svg" alt="">
								<div class="text">Sofás<span class="glyphicon glyphicon-menu-down"></span></div>
							</a>
							<!-- SUBMENU Sofás -->
							<div class="submenu" id="sofas">
								<div class="container">
									<div class="left">
										<div class="text">
											Sofás
										</div>
										<div class="row">
											<div class="col-sm-4">
												<a href="#" class="item">Sofás <span>(18)</span></a>
											</div>
											<div class="col-sm-4">
												<a href="#" class="item">Sofás cama <span>(12)</span></a>
											</div>
											<div class="col-sm-4 hidden-xs">
												<a class="promo-menu" href="/sofa-chester-pu-2-plazas" title="Sofá CHESTER PU -2 Plazas-">
													<div class="featuring-menu-title">Destacamos:</div>
													<span class="promo-title">Sofá CHESTER PU -2 Plazas-</span>
													<div class="promo-image">
														<img src="https://www.superestudio.com/imagenes/productos/ARTDE016/min/categoria/ARTDE0161.jpg" width="150" alt="Sofá CHESTER PU -2 Plazas-"/>
													</div>
												</a>
											</div>
										</div>
										<div class="text col-md-12">
											<a href="#" class="btn btn-secondary btn-sm btn-rounded">Ver todos los sofás</a>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<a href="javascript:void(0)" class="category sub" data-tipo="cojines">
								<img src="imagenes/iconos/svg/menuCojines.svg" alt="">
								<div class="text">Cojines<span class="glyphicon glyphicon-menu-down"></span></div>
							</a>
							<!-- SUBMENU Cojines -->
							<div class="submenu" id="cojines">
								<div class="container">
									<div class="left">
										<div class="text">
											Cojines
										</div>
										<div class="row">
											<div class="col-sm-4">
												<a href="#" class="item">Frases <span>(18)</span></a>
												<a href="#" class="item">Animales humanizados <span>(18)</span></a>
												<a href="#" class="item">Estampados <span>(18)</span></a>
												<a href="#" class="item">Países <span>(12)</span></a>
												<a href="#" class="item">Cómic <span>(12)</span></a>
											</div>
											<div class="col-sm-4">
												<a href="#" class="item">Apalabrados <span>(12)</span></a>
												<a href="#" class="item">Divertidos <span>(12)</span></a>
												<a href="#" class="item">Rellenos <span>(12)</span></a>
												<a href="#" class="item">Animales <span>(12)</span></a>
												<a href="#" class="item">Pop <span>(12)</span></a>
											</div>
											<div class="col-sm-4 hidden-xs">
												<a class="promo-menu" href="/funda-cojin-drink-champagne-algodon-30x50" title="Funda cojín DRINK CHAMPAGNE algodón 30x50">
													<div class="featuring-menu-title">Destacamos:</div>
													<span class="promo-title">Funda cojín DRINK CHAMPAGNE algodón 30x50</span>
													<div class="promo-image">
														<img src="https://www.superestudio.com/imagenes/productos/HCN2191/min/categoria/HCN21911.jpg" width="150" alt="Funda cojín DRINK CHAMPAGNE algodón 30x50"/>
													</div>
												</a>
											</div>
										</div>
										<div class="text col-md-12">
											<a href="#" class="btn btn-secondary btn-sm btn-rounded">Ver todos los cojines</a>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<a href="javascript:void(0)" class="category sub" data-tipo="alfombras">
								<img src="imagenes/iconos/svg/menuAlfombras.svg" alt="">
								<div class="text">Alfombras<span class="glyphicon glyphicon-menu-down"></span></div>
							</a>
							<!-- SUBMENU Alfombras -->
							<div class="submenu" id="alfombras">
								<div class="container">
									<div class="left">
										<div class="text">
											Alfombras
										</div>
										<div class="row">
											<div class="col-sm-4">
												<a href="#" class="item">Felpudos <span>(18)</span></a>
												<a href="#" class="item">Alfombras infantiles <span>(12)</span></a>
											</div>
											<div class="col-sm-4">
												<a href="#" class="item">Alfombras <span>(71)</span></a>
											</div>
											<div class="col-sm-4 hidden-xs">
												<a class="promo-menu" href="/alfombra-felpudo-aqui-dentro-hay-mucho-amor-60x40cm" title="Alfombra felpudo AQUI DENTRO HAY MUCHO AMOR -60x40cm-">
													<div class="featuring-menu-title">Destacamos:</div>
													<span class="promo-title">Alfombra felpudo AQUI DENTRO HAY MUCHO AMOR -60x40cm-</span>
													<div class="promo-description">Felpudo para recibir con arte a tus invitados</div>
													<div class="promo-image">
														<img src="https://www.superestudio.com/imagenes/productos/HCN2226/min/categoria/HCN22261.jpg" width="150" alt="Alfombra felpudo AQUI DENTRO HAY MUCHO AMOR -60x40cm-"/>
													</div>
												</a>
											</div>
										</div>
										<div class="text col-md-12">
											<a href="#" class="btn btn-secondary btn-sm btn-rounded">Ver todas las alfombras</a>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<a href="javascript:void(0)" class="category sub" data-tipo="cuadros">
								<img src="imagenes/iconos/svg/menuCuadros.svg" alt="">
								<div class="text">Cuadros<span class="glyphicon glyphicon-menu-down"></span></div>
							</a>
							<!-- SUBMENU Cuadros -->
							<div class="submenu" id="cuadros">
								<div class="container">
									<div class="left">
										<div class="text">
											Cuadros
										</div>
										<div class="row">
											<div class="col-sm-4">
												<a href="#" class="item">Lienzos 1 pieza <span>(18)</span></a>
												<a href="#" class="item">Cuadros madera impresa <span>(18)</span></a>
												<a href="#" class="item">Lienzos pirámide 5 piezas <span>(12)</span></a>
												<a href="#" class="item">Chapas decorativas <span>(12)</span></a>
											</div>
											<div class="col-sm-4">
												<a href="#" class="item">Lienzos trípticos <span>(71)</span></a>
												<a href="#" class="item">Cuadros con marco <span>(71)</span></a>
												<a href="#" class="item">Cuadros metal impreso <span>(12)</span></a>
												<a href="#" class="item">Portafotos <span>(12)</span></a>
											</div>
											<div class="col-sm-4 hidden-xs">
												<a class="promo-menu" href="/banderola-yourself" title="Banderola YOURSELF">
													<div class="featuring-menu-title">Destacamos:</div>
													<span class="promo-title">Banderola YOURSELF</span>
													<div class="promo-image">
														<img src="https://www.superestudio.com/imagenes/productos/HCN2439/min/categoria/HCN24391.jpg" width="150" alt="Banderola YOURSELF"/>
													</div>
												</a>
											</div>
										</div>
										<div class="text col-md-12">
											<a href="#" class="btn btn-secondary btn-sm btn-rounded">Ver todos los cuadros</a>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<a href="javascript:void(0)" class="category sub" data-tipo="vinilos">
								<img src="imagenes/iconos/svg/menuVinilos.svg" alt="">
								<div class="text">Vinilos<span class="glyphicon glyphicon-menu-down"></span></div>
							</a>
							<!-- SUBMENU Vinilos -->
							<div class="submenu" id="vinilos">
								<div class="container">
									<div class="left">
										<div class="text">
											Vinilos
										</div>
										<div class="row">
											<div class="col-sm-4">
												<a href="#" class="item">Vinilos <span>(410)</span></a>
												<a href="#" class="item">Vinilos luminiscentes <span>(18)</span></a>
												<a href="#" class="item">Vinilos infantiles <span>(12)</span></a>
											</div>
											<div class="col-sm-4">
												<a href="#" class="item">Vinilos de pizarra <span>(71)</span></a>
												<a href="#" class="item">Vinilos de Navidad <span>(32)</span></a>
												<a href="#" class="item">Vinilos de espejo <span>(12)</span></a>
											</div>
											<div class="col-sm-4 hidden-xs">
												<a class="promo-menu" href="/vinilo-decorativo-live-your-dreams" title="Vinilo Decorativo LIVE YOUR DREAMS">
													<div class="featuring-menu-title">Destacamos:</div>
													<span class="promo-title">Vinilo Decorativo LIVE YOUR DREAMS</span>
													<div class="promo-image">
														<img src="https://www.superestudio.com/imagenes/productos/HCN1349/5/HCN1349-5_1.jpg" width="150" alt="Vinilo Decorativo LIVE YOUR DREAMS"/>
													</div>
												</a>
											</div>
										</div>
										<div class="text col-md-12">
											<a href="#" class="btn btn-secondary btn-sm btn-rounded">Ver todos los vinilos</a>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<a href="javascript:void(0)" class="category sub" data-tipo="almacenaje">
								<img src="imagenes/iconos/svg/menuAlmacenaje.svg" alt="">
								<div class="text">Almacenaje<span class="glyphicon glyphicon-menu-down"></span></div>
							</a>
							<!-- SUBMENU Almacenaje -->
							<div class="submenu" id="almacenaje">
								<div class="container">
									<div class="left">
										<div class="text">
											Almacenaje
										</div>
										<div class="row">
											<div class="col-sm-4">
												<a href="#" class="item">Baúles <span>(410)</span></a>
												<a href="#" class="item">Joyeros <span>(18)</span></a>
												<a href="#" class="item">Camas <span>(12)</span></a>
											</div>
											<div class="col-sm-4">
												<a href="#" class="item">Estanterías <span>(71)</span></a>
												<a href="#" class="item">Cajoneras <span>(12)</span></a>
											</div>
											<div class="col-sm-4 hidden-xs">
												<a class="promo-menu" href="/baul-almacenaje-plegable-40-x-255-x-24-cm" title="Baúl almacenaje plegable 40 x 25,5 x 24 cm">
													<div class="featuring-menu-title">Destacamos:</div>
													<span class="promo-title">Baúl almacenaje plegable 40 x 25,5 x 24 cm</span>
													<div class="promo-description"></div>
													<div class="promo-image">
														<img src="http://www.superestudio.com/imagenes/productos/HCN1083/min/categoria/HCN10831.jpg" width="150" alt="Baúl almacenaje plegable 40 x 25,5 x 24 cm"/>
													</div>
												</a>
											</div>
										</div>
										<div class="text col-md-12">
											<a href="#" class="btn btn-secondary btn-sm btn-rounded">Ver todos los almacenajes</a>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<a href="javascript:void(0)" class="category sub" data-tipo="decoracion">
								<img src="imagenes/iconos/svg/menuDecoracion.svg" alt="">
								<div class="text">Decoración<span class="glyphicon glyphicon-menu-down"></span></div>
							</a>
							<!-- SUBMENU Decoración -->
							<div class="submenu" id="decoracion">
								<div class="container">
									<div class="left">
										<div class="text">
											Decoración
										</div>
										<div class="row">
											<div class="col-sm-4">
												<a href="#" class="item">Espejos <span>(18)</span></a>
												<a href="#" class="item">Jarrones y figuras decorativas <span>(18)</span></a>
												<a href="#" class="item">Relojes decorativos <span>(18)</span></a>
												<a href="#" class="item">Trofeos cabeza animal en madera <span>(18)</span></a>
												<a href="#" class="item">Biombos <span>(12)</span></a>
												<a href="#" class="item">Maceteros <span>(12)</span></a>
												<a href="#" class="item">Paneles decorativos <span>(12)</span></a>
												<a href="#" class="item">Portafotos <span>(12)</span></a>
											</div>
											<div class="col-sm-4">
												<a href="#" class="item">Percheros <span>(71)</span></a>
												<a href="#" class="item">Plantas decorativas <span>(71)</span></a>
												<a href="#" class="item">Mobiliario iluminado <span>(71)</span></a>
												<a href="#" class="item">Pizarras <span>(71)</span></a>
												<a href="#" class="item">Cajas de madera <span>(12)</span></a>
												<a href="#" class="item">Menaje <span>(12)</span></a>
												<a href="#" class="item">Colgadores decorativos <span>(12)</span></a>
											</div>
											<div class="col-sm-4 hidden-xs">
												<a class="promo-menu" href="/muebles_de_diseno/_mantel_pvc_43x30_picnik_green_-uso_1_persona-_141775" title="Mantel PVC 43x30 PICNIK Green -uso 1 persona-">
													<div class="featuring-menu-title">Destacamos:</div>
													<span class="promo-title">Mantel PVC 43x30 PICNIK Green -uso 1 persona-</span>
													<div class="promo-image">
														<img src="http://www.superestudio.com/imagenes/productos/HCN1209/min/categoria/HCN12091.jpg" width="150" alt="Mantel PVC 43x30 PICNIK Green -uso 1 persona-"/>
													</div>
												</a>
											</div>
										</div>
										<div class="text col-md-12">
											<a href="#" class="btn btn-secondary btn-sm btn-rounded">Ver todos de decoración</a>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
		        </li>
			</ul>
		  
			<ul class="nav navbar-nav navbar-right">
				<a href="#" class="status">
					<div class="text hidden-sm">
						Consulta el <br />
						<strong>estado de tu pedido</strong>
					</div>
					<img src="imagenes/iconos/svg/status.svg" alt="">
				</a>
				
				<li class="divider"></li>
				
				<form class="navbar-form search" action="#" method="post" role="search">
					<div class="input-group">
				    	<input type="text" class="form-control input-search" name="input-buscar" placeholder="Busca...">
				    	<span class="input-group-btn">
				        	<button class="btn btn-search" type="submit"><img src="imagenes/iconos/svg/topmenuSearch.svg" alt=""></button>
				      	</span>
				    </div>
				</form>


			</ul>
		</div><!-- /.navbar-collapse -->
	</div><!-- /.container-fluid -->

	<!-- Cabecera -->
	<div class="categoria-menu">
		<div class="container-fluid">
			<div class="row">
				<div class="menu">

					
				</div>
			</div>
		</div>
	</div>
</nav>

<div class="container">
	<!-- Breadcrumb -->
	<ol class="breadcrumb">
		<li><a href="#">Inicio</a></li>
		<li class="active">Sillas</li>
	</ol>
		
	<!-- Especiales -->
	<section class="row banners-especial">
		<div class="col-sm-6 col-md-4 banner banner-eames">
			<a href="#">
				<div class="banner-img">
					<img class="img-responsive" src="imagenes/banners/eames.jpg" srcset="imagenes/banners/eames@2x.jpg 2x" alt="#">
					<div class="titulo">Especial <span>Eames design</span></div>
				</div>
			</a>
		</div>
		<div class="col-sm-6 col-md-4 banner banner-tolix">
			<a href="#">
				<div class="banner-img">
					<img class="img-responsive" src="imagenes/banners/tolix.jpg" srcset="imagenes/banners/tolix@2x.jpg 2x" alt="#">
					<div class="titulo">Especial <span>Tolix design</span></div>
				</div>
			</a>
		</div>
		<div class="hidden-sm col-md-4 banner banner-pop">
			<a href="#">
				<div class="banner-img">
					<img class="img-responsive" src="imagenes/banners/preciominimo3.jpg" srcset="imagenes/banners/preciominimo3@2x.jpg 2x" alt="#">
					<div class="titulo">Precio mínimo <span>garantizado</span></div>
					<span class="footer-text">en más de 60 productos</span>
				</div>
			</a>
		</div>
	</section>
</div>

<div class="bgDark">
	<div class="container">
		<section class="center">
			
			<div class="title">Sillas</div>
			
			<div  id="seoText" class="seo-text">
				<div class="text">
					<h1>Sillas modernas</h1>
					<p>En <strong>SuperStudio</strong> disponemos de una amplia selección de <strong>sillas modernas</strong>, iconos del diseño, creaciones contemporáneas, piezas nórdicas, vintage, pop art, de estilo Bauhaus, etc. Multitud de opciones para encontrar la adecuada al estilo de cada uno. La <strong>silla</strong> es el elemento de mobiliario que posee mayor personalidad. Puede hablar por sí sola de los habitantes de una casa. Por este motivo, ha sido la obsesión de diseñadores y arquitectos a lo largo de la historia. Desde principios del siglo XX, los autores se han arriesgado utilizando <strong>materiales plásticos y metálicos de uso industrial</strong>, y ajenos a la construcción tradicional de muebles: polipropileno, ABS, polietileno, fibra de vidrio, acero, aluminio, etc. El resultado han sido estructuras, colores y texturas hasta entonces desconocidos. Anteriormente, apenas había posibilidades de elección. La fabricación artesanal de <strong>sillas</strong> se movía entre la sobriedad funcional para servir a las clases más desfavorecidas, y estructuras barrocas con una ornamentación excesiva para demostrar la posición de las clases más pudientes. Con el empleo de nuevos materiales, se dio el paso a una <strong>concepción renovada de este mueble.</strong> Se añadió frescura a sus líneas y se introdujeron ideas innovadoras en su composición, impregnando a la silla de la modernidad propia de un tiempo cambiante.</p>
					<h2>Nuestro catálogo de sillas modernas</h2>
					<p>Las sillas modernas ya no son elementos bien definidos con un uso único. Ahora, además de ser <strong>útiles y cómodas</strong>, deben aspirar a convertirse casi en obras de arte. Nuestro catálogo contiene los Modern Classics imprescindibles para cualquier amante de la decoración: la silla Phantom, la silla Tower, la silla Neo, la silla Didi, la silla Barcelona… y un largo etcétera de los modelos que han logrado un puesto indiscutible en la historia del diseño de vanguardia. También hemos incluido las piezas actuales más llamativas y aquellas de <strong>última tendencia en diseño de interiores</strong>. Ya se trate de sillas de comedor, un sillón cómodo para el rincón de lectura o una chaise longue para el salón, todos necesitamos un lugar acogedor donde reposar. Y esto no es menos importante cuando hablamos de trabajo. Por eso ofrecemos también una gran variedad de <strong>sillas modernas de oficina</strong>, muy confortables, para ajustarse a las necesidades del usuario y permitirle rendir al máximo. Descubre ahora nuestra sección de sillas modernas y verás qué fácil es encontrar la pieza perfecta para tu hogar, establecimiento o espacio de trabajo. Disfruta de un correcto descanso, sin abandonar el buen gusto, con descuentos increíbles.</p>
					<div class="gradient"></div>
				</div>
				<div class="col-md-12 read-more">
					<button class="btn btn-link toggleHeight" data-element="seoText" data-action="show">ver más <i class="glyphicon glyphicon-triangle-bottom"></i></button>
					<button class="btn btn-link toggleHeight hide" data-element="seoText" data-action="hide">ver menos <i class="glyphicon glyphicon-triangle-top"></i></button>
				</div>
			</div>

			<a class="btn btn-primary btn-rounded show-filter collapsed" role="button" data-toggle="collapse" href="#filtersBox" aria-expanded="false" aria-controls="filtersBox">
				<span class="more">ver filtros <i class="glyphicon glyphicon-plus"></i></span>
				<span class="less">ocultar filtros <i class="glyphicon glyphicon-minus"></i></span>
			</a>

			<div class="collapse" id="filtersBox">
				<div class="filters-box">
					<div class="resultados">
						<span id="filtroInfo" class="filtro-info">Actualmente no tienes ningún filtro activo</span>
						<span class="filtro-resultados">Mostrando 4.320 resultados</span>
						<div class="alert alert-danger alert-dismissible active-filter" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
						<div class="alert alert-danger alert-dismissible active-filter" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
						<div class="alert alert-danger alert-dismissible active-filter" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
						<div class="alert alert-danger alert-dismissible active-filter" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
						<div class="alert alert-danger alert-dismissible active-filter" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
						<div class="alert alert-danger alert-dismissible active-filter" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
						<div class="alert alert-danger alert-dismissible active-filter" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
						<div class="alert alert-danger alert-dismissible active-filter" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
						<div class="alert alert-danger alert-dismissible active-filter" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
						<div class="alert alert-danger alert-dismissible active-filter" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
					</div>
					<div class="filters-section intro-filter panel-body panel-light">

					    <!-- subcategoría -->
					    <div class="row">
							<div class="col-lg-2 col-md-12 text-center-sm text-center-md row-space-sm-1 filter-label text-right">
								<label>Subcategoría:</label>
							</div>

							<div class="col-lg-9 col-md-11 filters-options">
								<div class="row row-condensed filters-columns">
								    <div class="col-md-3">
										<div class="checkbox">
											<label class="media checkbox facet-checkbox" title="Sillas iconos del diseño">
												<input type="checkbox" name="subcategory" value="sillasIconosDelDiseno"> Sillas iconos del diseño
											</label>
										</div>
								    </div>
								    <div class="col-md-3">
										<div class="checkbox">
											<label class="media checkbox facet-checkbox" title="Sillas de madera">
												<input type="checkbox" name="subcategory" value="sillasDeMadera"> Sillas de madera
											</label>
										</div>
								    </div>
								    <div class="col-md-3">
										<div class="checkbox">
											<label class="media checkbox facet-checkbox" title="Sillas de plástico con patas de madera">
												<input type="checkbox" name="subcategory" value="sillasDePlasticoConPatasDeMadera"> Sillas de plástico con patas de madera
											</label>
										</div>
								    </div>
								    <div class="col-md-3">
										<div class="checkbox">
											<label class="media checkbox facet-checkbox" title="Sillas de oficina">
												<input type="checkbox" name="subcategory" value="sillasDeOficina"> Sillas de oficina
											</label>
										</div>
								    </div>
								</div>

								<div class="filters-more collapse" id="subcategoriaTodos">
									<div class="row row-condensed filters-columns">
										<div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Sillas plegables">
													<input type="checkbox" name="subcategory" value="sillasPlegables"> Sillas plegables
												</label>
											</div>
										</div>
										<div class="col-md-3">
											<div class="checkbox">javascript:void(0);
												<label class="media checkbox facet-checkbox" title="Sillas apilables">
													<input type="checkbox" name="subcategory" value="sillasApilables"> Sillas apilables
												</label>
											</div>
										</div>
										<div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Sillas baby">
													<input type="checkbox" name="subcategory" value="sillasBaby"> Sillas baby
												</label>
											</div>
										</div>
										<div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Sillas mini decorativas">
													<input type="checkbox" name="subcategory" value="sillasMiniDecorativas"> Sillas mini decorativas
												</label>
											</div>
										</div>
										<div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Puffs">
													<input type="checkbox" name="subcategory" value="puffs"> Puffs
												</label>
											</div>
										</div>
										<div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Sillas de plástico">
													<input type="checkbox" name="subcategory" value="sillasDePlastico"> Sillas de plástico
												</label>
											</div>
										</div>
										<div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Sillas metálicas">
													<input type="checkbox" name="subcategory" value="sillasMetalicas"> Sillas metálicas
												</label>
											</div>
										</div>
										<div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Sillas patchwork">
													<input type="checkbox" name="subcategory" value="sillasPatchwork"> Sillas patchwork
												</label>
											</div>
										</div>
										<div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Sillas tapizadas">
													<input type="checkbox" name="subcategory" value="sillasTapizadas"> Sillas tapizadas
												</label>
											</div>
										</div>
										<div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Sillas balancín">
													<input type="checkbox" name="subcategory" value="sillasBalancin"> Sillas balancín
												</label>
											</div>
										</div>
										<div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Sillas para exterior">
													<input type="checkbox" name="subcategory" value="sillasParaExterior"> Sillas para exterior
												</label>
											</div>
										</div>
										<div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Sillones">
													<input type="checkbox" name="subcategory" value="sillones"> Sillones
												</label>
											</div>
										</div>
										<div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Bancos">
													<input type="checkbox" name="subcategory" value="bancos"> Bancos
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-1 text-right filter-more">
								<a class="btn btn-link collapsed show-more" role="button" data-toggle="collapse" href="#subcategoriaTodos" aria-expanded="false" aria-controls="subcategoriaTodos">
									<div>
										<span class="more">Más</span>
										<span class="less">Menos</span>
									</div>
								</a>
							</div>
					    </div>
					    
					    <!-- precio -->
					    <div class="row">
							<div class="col-lg-2 col-md-12 text-center-sm text-center-md row-space-sm-1 filter-label text-right">
								<label>Precio:</label>
							</div>
							<div class="col-lg-9 col-md-11 filters-options">
								<div class="row row-condensed filters-columns">
									<div class="col-xs-12 col-sm-8 col-md-10 col-sm-push-2 col-md-push-1">
										<input id="priceRange" type="text" class="span2" data-slider-min="0" data-slider-max="1500" data-slider-step="10" data-slider-value="[0,1500]"/>
									</div>
									<div class="col-xs-6 col-sm-2 col-md-1 col-sm-pull-8 col-md-pull-10">
										<span>0€</span>
									</div>
									<div class="col-xs-6 col-sm-2 col-md-1 text-right">
										<span>1500€</span>
									</div>
								</div>
							</div>
							<div class="col-md-1 text-right filter-more"></div>
					    </div>

						<!-- estilo -->
						<div class="row">
							<div class="col-lg-2 col-md-12 text-center-sm text-center-md row-space-sm-1 filter-label text-right">
								<label>Estilo:</label>
							</div>

							<div class="col-lg-9 col-md-11 filters-options">
								<div class="row row-condensed filters-columns">
									<div class="col-md-3">
										<div class="checkbox">
											<label class="media checkbox facet-checkbox" title="Tolix Design">
												<input type="checkbox" name="style" value="TolixDesign"> Tolix Design
											</label>
										</div>
									</div>
								    <div class="col-md-3">
										<div class="checkbox">
											<label class="media checkbox facet-checkbox" title="Tower Design">
												<input type="checkbox" name="style" value="TowerDesign"> Tower Design
											</label>
										</div>
								    </div>
									<div class="col-md-3">
										<div class="checkbox">
											<label class="media checkbox facet-checkbox" title="Modern classics">
												<input type="checkbox" name="style" value="modernclassics"> Modern classics
											</label>
										</div>
									</div>
									<div class="col-md-3">
										<div class="checkbox">
											<label class="media checkbox facet-checkbox" title="Vintage">
												<input type="checkbox" name="style" value="vintage"> Vintage
											</label>
										</div>
									</div>
								</div>

								<div class="filters-more collapse" id="estiloTodos">
									<div class="row row-condensed filters-columns">
									    <div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Pop">
													<input type="checkbox" name="style" value="pop"> Pop
												</label>
											</div>
									    </div>
									    <div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Industrial">
													<input type="checkbox" name="style" value="industrial"> Industrial
												</label>
											</div>
									    </div>
										<div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Rústico">
													<input type="checkbox" name="style" value="rustic"> Rústico
												</label>
											</div>
										</div>
										<div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Transparente">
													<input type="checkbox" name="style" value="transparent"> Transparente
												</label>
											</div>
										</div>
									    <div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Color edition">
													<input type="checkbox" name="style" value="coloredition"> Color edition
												</label>
											</div>
									    </div>
										<div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="New York">
													<input type="checkbox" name="style" value="newyork"> New York
												</label>
											</div>
										</div>
										<div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Nordic">
													<input type="checkbox" name="style" value="nordic"> Nordic
												</label>
											</div>
										</div>
										<div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Decorative objects">
													<input type="checkbox" name="style" value="decorativeobjects"> Objeto decorativo
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-1 text-right filter-more">
								<a class="btn btn-link collapsed show-more" role="button" data-toggle="collapse" href="#estiloTodos" aria-expanded="false" aria-controls="estiloTodos">
									<div>
										<span class="more">Más</span>
										<span class="less">Menos</span>
									</div>
								</a>
							</div>
						</div>
						
						<div class="collapse" id="allFilters">

							<!-- colección -->
							<div class="row">
								<div class="col-lg-2 col-md-12 text-center-sm text-center-md row-space-sm-1 filter-label text-right">
									<label>Colección:</label>
								</div>

								<div class="col-lg-9 col-md-11 filters-options">
									<div class="row row-condensed filters-columns">
										<div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Niños">
													<input type="checkbox" name="colection" value="ninos"> Niños
												</label>
											</div>
										</div>
									    <div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Dormitorio">
													<input type="checkbox" name="colection" value="dormitorio"> Dormitorio
												</label>
											</div>
									    </div>
										<div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Descanso">
													<input type="checkbox" name="colection" value="descanso"> Descanso
												</label>
											</div>
										</div>
										<div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Cocina">
													<input type="checkbox" name="colection" value="cocina"> Cocina
												</label>
											</div>
										</div>
									</div>

									<div class="filters-more collapse" id="coleccionTodos">
										<div class="row row-condensed filters-columns">
										    <div class="col-md-3">
												<div class="checkbox">
													<label class="media checkbox facet-checkbox" title="Baño">
														<input type="checkbox" name="colection" value="bano"> Baño
													</label>
												</div>
										    </div>
											<div class="col-md-3">
												<div class="checkbox">
													<label class="media checkbox facet-checkbox" title="Cocina">
														<input type="checkbox" name="colection" value="cocina"> Cocina
													</label>
												</div>
											</div>
										    <div class="col-md-3">
												<div class="checkbox">
													<label class="media checkbox facet-checkbox" title="Trabajo">
														<input type="checkbox" name="colection" value="trabajo"> Trabajo
													</label>
												</div>
										    </div>
										    <div class="col-md-3">
												<div class="checkbox">
													<label class="media checkbox facet-checkbox" title="Descanso">
														<input type="checkbox" name="colection" value="descanso"> Descanso
													</label>
												</div>
										    </div>
											<div class="col-md-3">
												<div class="checkbox">
													<label class="media checkbox facet-checkbox" title="Verano">
														<input type="checkbox" name="colection" value="verano"> Verano
													</label>
												</div>
											</div>
											<div class="col-md-3">
												<div class="checkbox">
													<label class="media checkbox facet-checkbox" title="Navidad">
														<input type="checkbox" name="colection" value="navidad"> Navidad
													</label>
												</div>
											</div>
											<div class="col-md-3">
												<div class="checkbox">
													<label class="media checkbox facet-checkbox" title="San Valentín">
														<input type="checkbox" name="colection" value="sanValentin"> San Valentín
													</label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-1 text-right filter-more">
									<a class="btn btn-link collapsed show-more" role="button" data-toggle="collapse" href="#coleccionTodos" aria-expanded="false" aria-controls="coleccionTodos">
										<div>
											<span class="more">Más</span>
											<span class="less">Menos</span>
										</div>
									</a>
								</div>
							</div>
						    
						    <!-- acabado -->
						    <div class="row">
								<div class="col-lg-2 col-md-12 text-center-sm text-center-md row-space-sm-1 filter-label text-right">
									<label>Acabado:</label>
								</div>
								<div class="col-lg-9 col-md-11 filters-options">
									<div class="row row-condensed filters-columns">
										<div class="col-xs-12 acabado">
											<div class="color" data-title="negro" value="negro"></div>	
											<div class="color" data-title="gris" value="gris"></div>	
											<div class="color" data-title="verde" value="verde"></div>	
											<div class="color" data-title="azul" value="azul"></div>		
											<div class="color" data-title="lila" value="lila"></div>	
											<div class="color" data-title="rosa" value="rosa"></div>	
											<div class="color" data-title="rojo" value="rojo"></div>	
											<div class="color" data-title="marron" value="marron"></div>	
											<div class="color" data-title="beige" value="beige"></div>	
											<div class="color" data-title="naranja" value="naranja"></div>	
											<div class="color" data-title="amarillo" value="amarillo"></div>	
											<div class="color" data-title="crema" value="crema"></div>
											<div class="color" data-title="blanco" value="blanco"></div>
										</div>
									</div>
									
									<div class="filters-more collapse" id="acabadosTodos">
										<div class="col-xs-12 acabado">
											<div class="material" data-title="abedul" value="abedul"></div>
											<div class="material" data-title="acero" value="acero"></div>
											<div class="material" data-title="aluminio" value="aluminio"></div>
											<div class="material" data-title="castaño" value="castano"></div>
											<div class="material" data-title="cerezo" value="cerezo"></div>
											<div class="material" data-title="cobre" value="cobre"></div>
											<div class="material" data-title="corcho" value="corcho"></div>
											<div class="material" data-title="cristal" value="cristal"></div>
											<div class="material" data-title="cromado" value="cromado"></div>
											<div class="material" data-title="cuerda" value="cuerda"></div>
											<div class="material" data-title="cuero" value="cuero"></div>
											<div class="material" data-title="dorado" value="dorado"></div>
											<div class="material" data-title="espejo" value="espejo"></div>
											<div class="material" data-title="estampado" value="estampado"></div>
											<div class="material" data-title="fresno" value="fresno"></div>
											<div class="material" data-title="haya" value="haya"></div>
											<div class="material" data-title="lana" value="lana"></div>
											<div class="material" data-title="madera" value="madera"></div>
											<div class="material" data-title="marfil" value="marfil"></div>
											<div class="material" data-title="mármol" value="marmol"></div>
									   <!-- <div class="material" data-title="multicolor" value="multicolor"></div>
											<div class="material" data-title="nogal" value="nogal"></div>
											<div class="material" data-title="palisandro" value="palisandro"></div>
											<div class="material" data-title="piel" value="piel"></div>
											<div class="material" data-title="plata" value="plata"></div>
											<div class="material" data-title="poliéster" value="poliester"></div>
											<div class="material" data-title="roble" value="roble"></div>
											<div class="material" data-title="satinado" value="satinado"></div>
											<div class="material" data-title="teka" value="teka"></div>
											<div class="material" data-title="toro normando" value="toroNormando"></div>
											<div class="material" data-title="transparente" value="transparente"></div>
											<div class="material" data-title="tropical" value="tropical"></div>
											<div class="material" data-title="wengué" value="wengue"></div>
											<div class="material" data-title="zebrano" value="zebrano"></div>-->
										</div>
									</div>
								</div>
								<div class="col-md-1 text-right filter-more">
									<a class="btn btn-link collapsed show-more" role="button" data-toggle="collapse" href="#acabadosTodos" aria-expanded="false" aria-controls="acabadosTodos">
										<div>
											<span class="more">Más</span>
											<span class="less">Menos</span>
										</div>
									</a>
								</div>
						    </div>

							<!-- diseñador -->
						    <div class="row">
								<div class="col-lg-2 col-md-12 text-center-sm text-center-md row-space-sm-1 filter-label text-right">
									<label>Diseñador:</label>
								</div>

								<div class="col-lg-9 col-md-11 filters-options">
									<div class="row row-condensed filters-columns">
									    <div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Arne Jacobsen">
													<input type="checkbox" name="designer" value="ArneJacobsen"> Arne Jacobsen
												</label>
											</div>
									    </div>
									    <div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Charles & Ray Eames">
													<input type="checkbox" name="designer" value="CharlesRayEames"> Charles & Ray Eames
												</label>
											</div>
									    </div>
									    <div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Xavier Pauchard">
													<input type="checkbox" name="designer" value="XavierPauchard"> Xavier Pauchard
												</label>
											</div>
									    </div>
									    <div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Eero Saarinen">
													<input type="checkbox" name="designer" value="EeroSaarinen"> Eero Saarinen
												</label>
											</div>
									    </div>
									</div>

									<div class="filters-more collapse" id="disenadorTodos">
										<div class="row row-condensed filters-columns">
											<div class="col-md-3">
												<div class="checkbox">
													<label class="media checkbox facet-checkbox" title="Harry Bertoia">
														<input type="checkbox" name="designer" value="HarryBertoia"> Harry Bertoia
													</label>
												</div>
											</div>
											<div class="col-md-3">
												<div class="checkbox">
													<label class="media checkbox facet-checkbox" title="Jean Pauchard">
														<input type="checkbox" name="designer" value="JeanPauchard"> Jean Pauchard
													</label>
												</div>
											</div>
											<div class="col-md-3">
												<div class="checkbox">
													<label class="media checkbox facet-checkbox" title="Verner Panton">
														<input type="checkbox" name="designer" value="VernerPanton"> Verner Panton
													</label>
												</div>
											</div>
											<div class="col-md-3">
												<div class="checkbox">
													<label class="media checkbox facet-checkbox" title="Tom Dixon">
														<input type="checkbox" name="designer" value="TomDixon"> Tom Dixon
													</label>
												</div>
											</div>
											<div class="col-md-3">
												<div class="checkbox">
													<label class="media checkbox facet-checkbox" title="Serge Mouille">
														<input type="checkbox" name="designer" value="SergeMouille"> Serge Mouille
													</label>
												</div>
											</div>
											<div class="col-md-3">
												<div class="checkbox">
													<label class="media checkbox facet-checkbox" title="Philippe Starck">
														<input type="checkbox" name="designer" value="PhilippeStarck"> Philippe Starck
													</label>
												</div>
											</div>
											<div class="col-md-3">
												<div class="checkbox">
													<label class="media checkbox facet-checkbox" title="Otros diseñadores">
														<input type="checkbox" name="designer" value="OtrosDiseñadores"> Otros diseñadores
													</label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-1 text-right filter-more">
									<a class="btn btn-link collapsed show-more" role="button" data-toggle="collapse" href="#disenadorTodos" aria-expanded="false" aria-controls="disenadorTodos">
										<div>
											<span class="more">Más</span>
											<span class="less">Menos</span>
										</div>
									</a>
								</div>
						    </div>

						    <!-- material -->
						    <div class="row">
								<div class="col-lg-2 col-md-12 text-center-sm text-center-md row-space-sm-1 filter-label text-right">
									<label>Material:</label>
								</div>

								<div class="col-lg-9 col-md-11 filters-options">
									<div class="row row-condensed filters-columns">
									    <div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Cuerda">
													<input type="checkbox" name="material" value="cuerda"> Cuerda
												</label>
											</div>
									    </div>
									    <div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Fibra de vidrio">
													<input type="checkbox" name="material" value="fibradevidrio"> Fibra de vidrio
												</label>
											</div>
									    </div>
									    <div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Madera">
													<input type="checkbox" name="material" value="madera"> Madera
												</label>
											</div>
									    </div>
									    <div class="col-md-3">
											<div class="checkbox">
												<label class="media checkbox facet-checkbox" title="Metal">
													<input type="checkbox" name="material" value="cuerda"> Metal
												</label>
											</div>
									    </div>
									</div>

									<div class="filters-more collapse" id="materialTodos">
										<div class="row row-condensed filters-columns">
											<div class="col-md-3">
												<div class="checkbox">
													<label class="media checkbox facet-checkbox" title="Piel">
														<input type="checkbox" name="material" value="cuerda"> Piel
													</label>
												</div>
											</div>
											<div class="col-md-3">
												<div class="checkbox">
													<label class="media checkbox facet-checkbox" title="Plástico">
														<input type="checkbox" name="material" value="fibradevidrio"> Plástico
													</label>
												</div>
											</div>
											<div class="col-md-3">
												<div class="checkbox">
													<label class="media checkbox facet-checkbox" title="Tejido">
														<input type="checkbox" name="material" value="madera"> Tejido
													</label>
												</div>
											</div>
											<div class="col-md-3">
												<div class="checkbox">
													<label class="media checkbox facet-checkbox" title="Otros materiales">
														<input type="checkbox" name="material" value="cuerda"> Otros materiales
													</label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-1 text-right filter-more">
									<a class="btn btn-link collapsed show-more" role="button" data-toggle="collapse" href="#materialTodos" aria-expanded="false" aria-controls="materialTodos">
										<div>
											<span class="more">Más</span>
											<span class="less">Menos</span>
										</div>
									</a>
								</div>
							</div>
					    </div>
				  	</div>

					<a class="btn btn-secondary btn-rounded show-all-filters collapsed" role="button" data-toggle="collapse" href="#allFilters" aria-expanded="false" aria-controls="allFilters">
						<span class="more">ver más <i class="glyphicon glyphicon-triangle-bottom"></i></span>
						<span class="less">ver menos <i class="glyphicon glyphicon-triangle-top"></i></span>
					</a>
				</div>
			</div>

			<div class="result-bar">
				<span class="sort-title">ordenar por:</span>
				<div id="sortList" class="sort-list btn-group" data-toggle="buttons">
				  <label class="btn btn-link active">
				    <input type="radio" name="options" id="option1" autocomplete="off" checked> Top ventas <i class="glyphicon glyphicon-triangle-bottom"></i>
				  </label>
				  <label class="btn btn-link">
				    <input type="radio" name="options" id="option3" autocomplete="off"> Nuevo <i class="glyphicon glyphicon-triangle-bottom"></i>
				  </label>
				  <label class="btn btn-link">
				    <input type="radio" name="options" id="option4" autocomplete="off"> Precio <i class="glyphicon glyphicon-triangle-bottom"></i>
				  </label>
				  <label class="btn btn-link">
				    <input type="radio" name="options" id="option4" autocomplete="off"> Stock <i class="glyphicon glyphicon-triangle-bottom"></i>
				  </label>
				  <label class="btn btn-link">
				    <input type="radio" name="options" id="option4" autocomplete="off"> Plazo de entrega <i class="glyphicon glyphicon-triangle-bottom"></i>
				  </label>
				  <label class="btn btn-link">
				    <input type="radio" name="options" id="option2" autocomplete="off"> Nombre <i class="glyphicon glyphicon-triangle-bottom"></i>
				  </label>
				</div>
				<span class="results-title"><em>4320</em> resultados</span>
			</div>

			<div class="row productos">
				<%
					sql = 	" SELECT TOP 12 productos.id_producto,oferta,oferta_particulares,oferta_profesionales,prod_textos.url_amigable, " &_
							" ref,CASE WHEN prod_textos.nombre_producto IS NULL THEN nombre ELSE prod_textos.nombre_producto END AS nombre,precio,precio_tiendas,precio_profesionales,precio_coste,cat_textos.categoria as cat_isapi " &_
							" FROM productos " &_
							" LEFT JOIN prod_textos ON productos.id_producto = prod_textos.id_producto AND prod_textos.id_idioma = '" & idioma_textos & "' " &_
							" LEFT JOIN cat_textos ON productos.id_categoria = cat_textos.id_categoria AND cat_textos.id_idioma = '"&session("idioma")&"' " &_
							" ORDER BY suma_ventas_mensuales DESC "  ' productos.visitas DESC
							'response.write(sql)
							rs.Open sql, con

							Response.Buffer = True
							
							if NOT rs.EOF then

								contador = 1
								Do While NOT rs.EOF
									nombre = rs("nombre")
									nombre_cat = rs("cat_isapi")
									cat_isapi = limpiar_url(nombre_cat)
									url_imagen_destacado = "/imagenes/productos/"&rs("ref")&"/min/default/"&rs("ref")&"1.jpg"
									if NOT isnull(rs("url_amigable")) AND rs("url_amigable") <> "" Then
										link_detalle_destacado = "/" & rs("url_amigable")
									else
										link_detalle_destacado = "/" & palabra_clave_prod & "/" & cat_isapi & "_" & limpiar_url(rs("nombre")) & "_" & rs("id_producto")
									end if

									'precios
									oferta = EsOferta(rs("id_producto"))
									tipo_oferta = et_general(71) ' OFERTA
									precio_sin_descuento = calcula_precio_producto(rs("id_producto"),mostrar_iva,1)
									if oferta = True Then
										precio_final = calcula_precio_producto(rs("id_producto"),mostrar_iva,0)
										porc_oferta = Round(((cCUR(precio_sin_descuento) - cCUR(precio_final)) / cCUR(precio_sin_descuento)) * 100,0)
	'									if (porc_oferta mod 10)<> 0 and trim(id_referer) <> "" Then
	'										precio_final= round(precio_sin_descuento -(precio_sin_descuento * porc_oferta / 100),2)
	'									end if
									end if  
									' Averiguar si hay que calcular un precio por color
									pcteColorDescuento = 0
									if global_promocion_por_acabados = True then 
										pcteColorDescuento = devuelve_max_descuento_color(rs("id_producto"))
										if pcteColorDescuento > 0 then 
											oferta = true
											precio_final = calcula_precio_descuento(precio_final,pcteColorDescuento)
											porc_oferta = calcula_descuento(porc_oferta, pcteColorDescuento)
										end if
									end if
									
									%>

	                                <div class="col-sm-6 col-md-3 producto-box">
	                                	<div class="content">
		                                    <a href="<%=link_detalle_destacado%>" class="item"<% if oferta = True Then %> title="Oferta por tiempo limitado"<% end if %>>
		                                        <ul class="lista-labels">
			                                        <% if oferta = True Then %>
			                                        	<li><span class="label label-inmediato">Envío inmediato</span></li>
														<li><span class="label label-nuevo">Nuevo</span></li>
			                                        <% end if %>
			                                    </ul>
		                                        <div class="info">
		                                            <div class="nombre"><%=limitar_texto(nombre,50)%></div>
		                                            <div class="categoria"><%=nombre_cat%></div>
		                                        </div>
		                                        <img class="primary" src="<%=var_src_img%>/<%=muestra_imagen(url_imagen_destacado)%>" alt="<%=nombre%>">
		                                        <img class="secondary" src="https://www.superestudio.com/imagenes/productos/SHX014/SHX01412.jpg" alt="<%=nombre%>">
		                                        <span class="precio">
		                                        <% if oferta = true Then %>
		                                            <%if pcteColorDescuento > 0 then response.write "Desde" & "&nbsp;" else Response.Write(et_general(79)) ' ahora %>&nbsp;<span><%=mostrar_precio_pais(precio_final,null,true,true)%></span>
		                                        <% else %>
		                                            <%=mostrar_precio_pais(precio_sin_descuento,null,true,true)%>
		                                        <% end if %>
		                                                    
		                                        <!--span>€</span--></span>
		                                        <% if oferta = True Then %>
		                                        	<span class="text-desc">-<%=porc_oferta%>% descuento</span>
		                                    	<% end if %>
		                                        
		                                        <!--<span class="text-info">Liquidación</span>-->
		                                    </a>
										    <div class="folding">
										    	<div class="caja">
										    		<form class="add-product-form">
										        		<input type="submit" class="btn btn-primary add-to-cart" value="añadir al carrito">
											        	<div class="acabados">
															<label class="radio-inline color">
														  		<input type="radio" name="finishesRadioInput" value="Beige" required>
																<img src="imagenes/colores/beige.jpg" width="15" alt="Beige">
															</label>
															<label class="radio-inline color">
																<input type="radio" name="finishesRadioInput" value="Turquesa">
																<img src="imagenes/colores/turquesa.jpg" width="15" alt="Turquesa">
															</label>
															<label class="radio-inline color">
																<input type="radio" name="finishesRadioInput" value="Azul petróleo">
																<img src="imagenes/colores/azul-petroleo.jpg" width="15" alt="Azul petróleo">
															</label>
															<label class="radio-inline color">
																<input type="radio" name="finishesRadioInput" value="Marrón">
																<img src="imagenes/colores/marron.jpg" width="15" alt="Marrón">
															</label>
															<label class="radio-inline color">
																<input type="radio" name="finishesRadioInput" value="Naranja">
																<img src="imagenes/colores/naranja.jpg" width="15" alt="Naranja">
															</label>
															<label class="radio-inline color">
																<input type="radio" name="finishesRadioInput" value="Rojo">
																<img src="imagenes/colores/rojo.gif" width="15" alt="Rojo">
															</label>
															<label class="radio-inline color">
																<input type="radio" name="finishesRadioInput" value="Rosa claro">
																<img src="imagenes/colores/rosa-claro.jpg" width="15" alt="Rosa claro">
															</label>
															<label class="radio-inline color">
																<input type="radio" name="finishesRadioInput" value="Blanco">
																<img src="imagenes/colores/blanco.gif" width="15" alt="Blanco">
															</label>
															<label class="radio-inline color">
																<input type="radio" name="finishesRadioInput" value="Negro">
																<img src="imagenes/colores/negro.gif" width="15" alt="Negro">
															</label>
															<label class="radio-inline color">
																<input type="radio" name="finishesRadioInput" value="Crema">
																<img src="imagenes/colores/crema.gif" width="15" alt="Crema">
															</label>
															<label class="radio-inline color">
																<input type="radio" name="finishesRadioInput" value="Azul">
																<img src="imagenes/colores/azul.jpg" width="15" alt="Azul">
															</label>
															<label class="radio-inline color">
																<input type="radio" name="finishesRadioInput" value="Verde">
																<img src="imagenes/colores/verde.gif" width="15" alt="Verde">
															</label>
															<label class="radio-inline color">
																<input type="radio" name="finishesRadioInput" value="Amarillo">
																<img src="imagenes/colores/amarillo.jpg" width="15" alt="Amarillo">
															</label>
															<label class="radio-inline color">
																<input type="radio" name="finishesRadioInput" value="Gris oscuro">
																<img src="imagenes/colores/gris-oscuro.gif" width="15" alt="Gris oscuro">
															</label>
											        	</div>
											        </form>
										        	<div class="aviso">¡últimas unidades!</div>
										        	<div class="medidas">
										        		<div class="col-xs-4 altura">
										        			<img src="imagenes/iconos/svg/flechas-medidas.svg" alt="altura">85cm
										        		</div>
										        		<div class="col-xs-4 anchura">
										        			<img src="imagenes/iconos/svg/flechas-medidas.svg" alt="anchura">52cm
										        		</div>
										        		<div class="col-xs-4 profundidad">
										        			<img src="imagenes/iconos/svg/flechas-medidas.svg" alt="profundidad">45cm
										        		</div>
										        		<div class="clearfix"></div>
										        	</div>
										    	</div>
										    </div>
									    </div>
	                                </div>
							<%	rs.MoveNext
								contador = contador + 1
								Response.Flush()
						Loop
					end if
				rs.Close
				%>
			</div>
		</section>
	</div>
</div>

<!-- Ventajas -->
<section class="ventajas">
	<div class="container">
		<div class="row text-center">
			<div class="col-xs-6 col-md-3">
				<img src="imagenes/iconos/svg/ventajasSSL.svg" alt="">
				<h4>Compra segura</h4>
				<p>Tienda online con protocolo SSl para realizar tus compras con seguridad.</p>
			</div>
			<div class="col-xs-6 col-md-3">
				<img src="imagenes/iconos/svg/ventajasCorazon.svg" alt="">
				<h4>Diseño</h4>
				<p>El mejor diseño al mejor precio y todo el estilo en un sólo lugar.</p>
			</div>
			<div class="col-xs-6 col-md-3">
				<img src="imagenes/iconos/svg/ventajasStock.svg" alt="">
				<h4>Gran stock</h4>
				<p>Nuestro gran stock te asegura un servicio de entrega rápida.</p>
			</div>
			<div class="col-xs-6 col-md-3">
				<img src="imagenes/iconos/svg/ventajasChat.svg" alt="">
				<h4>Estamos cerca</h4>
				<p>Si tienes cualquier duda, estamos cerca para asesorarte.</p>
			</div>
		</div>
	</div>
</section>

<!-- Métodos de pago -->
<section class="methods-and-quality">
	<div class="container">
		<div class="row text-center metodo-pago">
			<h4>Métodos de pago</h4>
			<ul>
				<li class="pagos visa"></li>
				<li class="pagos visa-electron"></li>
				<li class="pagos mastercard"></li>
				<li class="pagos maestro"></li>
				<li class="pagos american-express"></li>
				<li class="pagos skrill"></li>
				<li class="pagos ideal"></li>
				<li class="pagos giropay"></li>
				<li class="pagos postepay"></li>
				<li class="pagos trustly"></li>
				<li class="pagos aplazame"></li>
				<li class="pagos sofort-banking"></li>
				<li class="pagos cb"></li>
				<li class="pagos eps"></li>
				<li class="pagos bank-transfer"></li>
				<li class="pagos cod"></li>
			</ul>
		</div>

		<div class="row text-center calidad-y-confianza">
			<h4>garantía de calidad y confianza</h4>
			<ul>
				<li class="pagos rapid-ssl"></li>
				<li class="pagos trusted-shops"></li>
			</ul>
		</div>
	</div>
</section>

<!-- Contacto -->
<section class="ventajas">
	<div class="container">
		<div class="row text-center">
			<div class="col-xs-6 col-md-3">
				<img src="imagenes/iconos/svg/ventajasEscribenos.svg" alt="">
				<h4>Escríbenos</h4>
				<p>Contacta con nosotros:<br>info@superestudio.com</p>
			</div>
			<div class="col-xs-6 col-md-3">
				<img src="imagenes/iconos/svg/ventajasLlamanos.svg" alt="">
				<h4>Llámanos</h4>
				<p>Teléfono +34 932 417 330<br>L-V de 9h a 13:30 y de 15:30 a 19h.</p>
			</div>
			<div class="col-xs-6 col-md-3">
				<img src="imagenes/iconos/svg/ventajasEnvio.svg" alt="">
				<h4>Costes de envío</h4>
				<p>Desde 3,95€. Consulta condiciones de envío <a href="#">aquí</a>. ¡Enviamos a toda Europa!</p>
			</div>
			<div class="col-xs-6 col-md-3">
				<img src="imagenes/iconos/svg/ventajasDevoluciones.svg" alt="">
				<h4>Devoluciones</h4>
				<p>Tienes un plazo de 14 días naturales para devolver tu producto.</p>
			</div>
		</div>
	</div>
</section>

<!-- Newsletter y Redes Sociales -->
<div class="bgDark">
	<div class="container">
		<section class="newsletter">
			<div class="row footer-top">
				<div class="col-md-6 text-center">
					<h4>¿Quieres recibir <br>nuestras newsletter?</h4>
					<form class="form-nws" action="#">
						<div class="input-group">
							<input id="email" name="email" type="text" class="form-control">
							<span class="input-group-btn">
								<input class="btn btn-flat" type="submit" value="Inscribirse"/>
							</span>
					    </div>
					</form>
				</div>
				<div class="col-md-6 text-center">
					<h4>Siguenos para no perderte nuestras <br>novedades y promociones</h4>
					<a class="enlaces_sociales" href="https://www.facebook.com/SuperStudioFanPage" target="_blank">
						<img src="imagenes/iconos/svg/smFacebook.svg" alt="#">
					</a>
					<a class="enlaces_sociales" href="https://twitter.com/superstudioweb" target="_blank">
						<img src="imagenes/iconos/svg/smTwitter.svg" alt="#">
					</a>
					<a class="enlaces_sociales" href="https://plus.google.com/+SuperestudioES/posts" target="_blank">
						<img src="imagenes/iconos/svg/smGoogle.svg" alt="#">
					</a>
					<a class="enlaces_sociales" href="https://www.pinterest.com/superstudioweb/" target="_blank">
						<img src="imagenes/iconos/svg/smPinterest.svg" alt="#">
					</a>
					<a class="enlaces_sociales" href="http://blog.superestudio.com/" target="_blank">
						<img src="imagenes/iconos/svg/smBlog.svg" alt="#">
					</a>
				</div>
			</div>
		</section>
	</div>
</div>

<!-- Footer -->
<section class="footer">
	<div class="container">
		<div class="row footer-titulos hidden-xs">
			<div class="col-md-8">
				<h4>Todas las categorías</h4>
				<div class="row footer-enlaces">
					<div class="col-xs-6 col-md-3 enlaces">
						<a href="#" class="enlace-bold">Sillas</a>
						<a href="#">Sillas iconos del diseño</a>
						<a href="#">Sillas de madera</a>
						<a href="#">Sillas metálicas</a>
						<a href="#">Sillas de plástico</a>
						<a href="#">Sillas de oficina</a>
						<a href="#">Sillas tapizadas</a>
						<a href="#">Sillas patchwork</a>
						<a href="#">Sillas plegables</a>
						<a href="#">Sillas para exterior</a>
						<a href="#">Sillas balancin</a>
						<a href="#">Sillas baby</a>
						<a href="#">Sillones</a>
						<a href="#">Bancos</a>
						<a href="#" class="enlace-bold">Taburetes</a>
						<a href="#">Taburetes</a>
						<a href="#" class="enlace-bold">Sofás</a>
						<a href="#">Sofás</a>
						<a href="#">Sofás cama</a>
					</div>
					<div class="col-xs-6 col-md-3 enlaces">
						<a href="#" class="enlace-bold">Mesas</a>
						<a href="#">Mesas de comedor</a>
						<a href="#">Mesas de oficina</a>
						<a href="#">Mesas de centro</a>
						<a href="#">Mesas de café</a>
						<a href="#">Mesas de bar</a>
						<a href="#">Mesas de TV</a>
						<a href="#">Mesas de exterior</a>
						<a href="#">Mobiliario de oficina</a>
						<a href="#">Barras</a>
						<a href="#">Consolas</a>
						<a href="#" class="enlace-bold">Lámparas</a>
						<a href="#">Lámparas de suspensión</a>
						<a href="#">Lámparas de sobremesa</a>
						<a href="#">Lámparas de pie</a>
						<a href="#">Lámparas de oficina</a>
						<a href="#">Apliques</a>
						<a href="#">Bombillas</a>
						<a href="#" class="enlace-bold">Puffs</a>
						<a href="#">Puffs</a>
					</div>
					<div class="col-xs-6 col-md-3 enlaces">
						<a href="#" class="enlace-bold">Mobiliario de Diseño</a>
						<a href="#">Estanterias</a>
						<a href="#">Cajoneras</a>
						<a href="#">Camas</a>
						<a href="#">Joyero</a>
						<a href="#" class="enlace-bold">Textil</a>
						<a href="#">Cojines y fundas</a>
						<a href="#">Alfombras</a>
						<a href="#" class="enlace-bold">Complementos</a>
						<a href="#">Espejos</a>
						<a href="#">Relojes</a>
						<a href="#">Percheros</a>
						<a href="#">Revisteros</a>
						<a href="#">Biombos</a>
						<a href="#">Velas</a>
						<a href="#">Jarrones y figuras</a>
						<a href="#">Maceteros</a>
						<a href="#">Menaje</a>
						<a href="#">Mobiliario iluminado</a>
						<a href="#">Libros de diseño</a>
						<a href="#">Productos de limpieza</a>
					</div>
					<div class="col-xs-6 col-md-3 enlaces">
						<a href="#" class="enlace-bold">Wall deco</a>
						<a href="#">Lienzos 1 y 3 piezas</a>
						<a href="#">Lienzos pirámide 5 piezas</a>
						<a href="#">Fotocuadros 1 y 3 piezas</a>
						<a href="#">Fotocuadros pirámide</a>
						<a href="#">Vinilos</a>
						<a href="#">Vinilos pizarra</a>
						<a href="#">Vinilos infatiles</a>
						<a href="#">Vinilos de espejo</a>
						<a href="#">Vinilos de Navidad</a>
						<a href="#">Cuadros de metal impreso</a>
						<a href="#">Cuadros de madera impresa</a>
						<a href="#">Relojes decorativos</a>
						<a href="#">Paneles decorativos</a>
						<a href="#">Colgadores decorativos</a>
						<a href="#">Chapas decorativas</a>
						<a href="#">Portafotos</a>
						<a href="#">Pizarras</a>
						<a href="#">Otros</a>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<h4>Más información</h4>
				<div class="row footer-enlaces">
					<div class="col-xs-6 col-md-6 enlaces">
						<a href="#" class="enlace-bold">Servicios</a>
						<a href="#">Mobiliario para restauración</a>
						<a href="#">Quiero alquilar mobiliario</a>
						<a href="#">Soluciones empresariales</a>
						<a href="#">Directorio de empresas</a>
						<a href="#">Registro profesional</a>
						<a href="#" class="enlace-bold">Nosotros</a>
						<a href="#">Preguntas frecuentes</a>
						<a href="#">Tiendas</a>
						<a href="#">Franquicias</a>
					</div>
					<div class="col-xs-6 col-md-6 enlaces">
						<a href="#" class="enlace-bold">¿Cómo contactarnos?</a>
						<a href="#">Contacto</a>
						<a href="#">Trabaja con nosotros</a>
						<a href="#">Enviar sugerencias</a>
						<a href="#" class="enlace-bold">Promociones</a>
						<a href="#">Outlet</a>
						<a href="#">Novedades</a>
						<a href="#">Todas las promociones</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="terms">
		<div class="container">
			<div class="row">
				<div class="col-sm-6 left"><span>&copy; 2005-2016 SuperStudio. Todos los derechos reservados</span></div>
				<div class="col-sm-6 right">
					<a href="#">Condiciones de uso</a> - <a href="#">Política de privacidad y cookies</a> - <a href="#">Notal
					legal</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Feedback message when a product is added to cart from product's grid -->
<div class="alert alert-success added-to-cart-alert" id="addedToCartFeedback" role="alert">
 	<button type="button" class="close"><span aria-hidden="true">&times;</span></button>Producto añadido correctamente al carrito
</div>

<script data-main="includes/scripts/category" src="includes/scripts/lib/require.min.js"></script>

</body>
</html>
<!--#include virtual="/includes/motor/cierre.asp"-->