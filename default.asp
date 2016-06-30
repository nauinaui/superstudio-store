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
    <link rel="stylesheet" href="includes/css/animate.min.css">
    <link rel="stylesheet" href="includes/css/superestudio.css">
</head>
<body>

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
			
			<div class="cart-container">
				<a class="btn-cart" href="javascript:void(0)" data-toggle="collapse" data-target="#myCart" aria-expanded="false" aria-controls="myCart">
					<img src="imagenes/iconos/svg/topmenuCarrito.svg" alt="#">
					<span class="badge">13</span>
				</a>

				<!-- My cart (opened) -->
				<div class="collapse my-cart" id="myCart">
					<div class="header">
						<button type="button" class="close pull-left" data-toggle="collapse" data-target="#myCart" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<span class="title">tu carrito</span>
						<img class="icon pull-right" src="imagenes/iconos/svg/topmenuCarrito.svg" alt="#">
					</div>
					<div class="item media">
						<div class="media-left media-middle">
							<button type="button" class="close pull-left" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						</div>
						<div class="media-body media">
							<div class="media-left media-middle">
								<img width="50" src="https://www.superestudio.com/imagenes/productos/BAZ004/min/default/BAZ0041.jpg" alt="Silla Wooden -Polipropileno-">
							</div>
							<div class="media-body">
								<span class="nombre">Silla Wooden -Polipropileno-</span>
								<span class="finish">Gris claro</span>
								<div class="price">
									<div class="last-price" id="productPrice">58,<span class="cents">01</span><span class="currency">€</span></div>
									<div class="old-price">116,<span class="cents">00</span><span class="currency">€</span></div>
									<div class="discount">-50%</div>
								</div>
							</div>
						</div>
						<div class="units media-right media-middle">
							<span class="units-title">unidades</span>
							<button type="button" class="btn btn-default btn-xs btn-rounded less">-</button>
							<span class="number">4</span>
							<button type="button" class="btn btn-default btn-xs btn-rounded more">+</button>
						</div>
					</div>
					<div class="item media">
						<div class="media-left media-middle">
							<button type="button" class="close pull-left" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						</div>
						<div class="media-body media">
							<div class="media-left media-middle">
								<img width="50" src="https://www.superestudio.com/imagenes/productos/BAZ004/min/default/BAZ0041.jpg" alt="Silla Wooden -Polipropileno-">
							</div>
							<div class="media-body">
								<span class="nombre">Silla TEREK</span>
								<span class="finish">Acero cepillado</span>
								<div class="price">
									<div class="last-price" id="productPrice">48,<span class="cents">01</span><span class="currency">€</span></div>
									<div class="old-price">102,<span class="cents">00</span><span class="currency">€</span></div>
									<div class="discount">-60%</div>
								</div>
							</div>
						</div>
						<div class="units media-right media-middle">
							<span class="units-title">unidades</span>
							<button type="button" class="btn btn-default btn-xs btn-rounded less">-</button>
							<span class="number">4</span>
							<button type="button" class="btn btn-default btn-xs btn-rounded more">+</button>
						</div>
					</div>
					<div class="item media">
						<div class="media-left media-middle">
							<button type="button" class="close pull-left" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						</div>
						<div class="media-body media">
							<div class="media-left media-middle">
								<img width="50" src="https://www.superestudio.com/imagenes/productos/SHX022/min/categoria/SHX0221.jpg" alt="Mesa Tendar WOOD 120">
							</div>
							<div class="media-body">
								<span class="nombre">Mesa Tendar WOOD 120</span>
								<span class="finish">Blanco</span>
								<div class="price">
									<div class="last-price" id="productPrice">69,<span class="cents">95</span><span class="currency">€</span></div>
									<div class="old-price">140,<span class="cents">00</span><span class="currency">€</span></div>
									<div class="discount">-50%</div>
								</div>
							</div>
						</div>
						<div class="units media-right media-middle">
							<span class="units-title">unidades</span>
							<button type="button" class="btn btn-default btn-xs btn-rounded less">-</button>
							<span class="number">4</span>
							<button type="button" class="btn btn-default btn-xs btn-rounded more">+</button>
						</div>
					</div>
					<div class="footer">
						<div class="col-xs-6 text-right">
							<p class="subtotal">subtotal</p>
							<span class="price subtotal">369,08€</span>
						</div>
						<div class="col-xs-6 text-left">
							<p>ahorro total</p>
							<span class="price saved">138,29€</span>
						</div>
						<div class="clearfix"></div>
						<p class="vat-text">Precio IVA incluido. Portes según destino.</p>
						<a href="#" class="btn btn-primary btn-rounded go-checkout-btn">hacer pedido</a>
						<button type="button" class="btn btn-link continue-shopping-btn" data-toggle="collapse" data-target="#myCart" aria-label="Close">Seguir comprando</button>
					</div>
				</div>
			</div>
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
														<img src="https://www.superestudio.com/imagenes/productos/HCN1083/min/categoria/HCN10831.jpg" width="150" alt="Baúl almacenaje plegable 40 x 25,5 x 24 cm"/>
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
														<img src="https://www.superestudio.com/imagenes/productos/HCN1209/min/categoria/HCN12091.jpg" width="150" alt="Mantel PVC 43x30 PICNIK Green -uso 1 persona-"/>
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
	
	<!-- Banners -->
	<section class="row banners-principales">
		<div class="col-md-6">
			<a href="#">
				<img src="imagenes/banners/sillasdsw.jpg" srcset="imagenes/banners/sillasdsw@2x.jpg 2x" class="img-responsive" alt="">
				<div class="countdown countdown1"></div>
			</a>
		</div>
		<div class="col-md-6">
			<a href="#">
				<img src="imagenes/banners/preciominimo1.jpg" srcset="imagenes/banners/preciominimo1@2x.jpg 2x" class="img-responsive" alt="">
				<div class="countdown countdown3"></div>
			</a>
			<a href="#">
				<img src="imagenes/banners/semanaiva.png" srcset="imagenes/banners/semanaiva@2x.png 2x" class="img-responsive" alt="">
				<div class="countdown countdown2"></div>
			</a>
		</div>
	</section>
	
	<!-- Especiales -->
	<section class="row banners-especial">
		<div class="col-md-4 banner banner-eames">
			<a href="#">
				<div class="banner-img">
					<img class="img-responsive" src="imagenes/banners/eames.jpg" srcset="imagenes/banners/eames@2x.jpg 2x" alt="#">
					<div class="titulo">Especial <span>Eames design</span></div>
				</div>
				<div class="btn btn-primary btn-sm btn-rounded">Compra ahora</div>
			</a>
		</div>
		<div class="col-md-4 banner banner-tolix">
			<a href="#">
				<div class="banner-img">
					<img class="img-responsive" src="imagenes/banners/tolix.jpg" srcset="imagenes/banners/tolix@2x.jpg 2x" alt="#">
					<div class="titulo">Especial <span>Tolix design</span></div>
				</div>
				<div class="btn btn-primary btn-sm btn-rounded">Compra ahora</div>
			</a>
		</div>
		<div class="col-md-4 banner banner-pop">
			<a href="#">
				<div class="banner-img">
					<img class="img-responsive" src="imagenes/banners/preciominimo3.jpg" srcset="imagenes/banners/preciominimo3@2x.jpg 2x" alt="#">
					<div class="titulo">Precio mínimo <span>garantizado</span></div>
					<span class="footer-text">en más de 60 productos</span>
				</div>
				<div class="btn btn-primary btn-sm btn-rounded">Compra ahora</div>
			</a>
		</div>
	</section>
</div>

<!-- Top ventas y Novedades -->
<div class="bgDark">
	<div class="container">

		<!-- Precio mínimo -->
		<section class="row center top-ventas">
			<h5 class="title">Precio mínimo garantizado</h5>
			<a href="#" class="btn btn-secondary btn-rounded title-btn">ver todos</a>
			<%
				sql = 	" SELECT TOP 8 productos.id_producto,oferta,oferta_particulares,oferta_profesionales,prod_textos.url_amigable, " &_
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
	                                        <img class="primary" src="https://www.superestudio.com/imagenes/productos/BAZ004/min/default/BAZ0041.jpg" alt="<%=nombre%>">
	                                        <img class="secondary" src="https://www.superestudio.com/imagenes/productos/BAZ004/min/default/BAZ0046.jpg" alt="<%=nombre%>">
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
			<div class="clearfix"></div>
			<a href="#" class="btn btn-secondary btn-rounded title-btn">ver todos</a>
		</section>

		<!-- Top ventas -->
		<section class="row center top-ventas">
			<h5 class="title">Top ventas</h5>
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
		</section>
	</div>
</div>

<!-- Diseñadores -->
<div class="container">
	<section class="row collapsed" id="disenadores">
		<h5 class="title">diseñadores</h5>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Arne Jacobsen</h6>
				<img class="img-responsive" src="imagenes/disenadores/Jacobsen.jpg" srcset="imagenes/disenadores/Jacobsen@2x.jpg 2x"
				     alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Charles & Ray Eames</h6>
				<img class="img-responsive" src="imagenes/disenadores/Eames.jpg" srcset="imagenes/disenadores/Eames@2x.jpg 2x"
				     alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Eero Aarnio</h6>
				<img class="img-responsive" src="imagenes/disenadores/EeroAarnio.jpg"
				     srcset="imagenes/disenadores/EeroAarnio@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Eero Saarinen</h6>
				<img class="img-responsive" src="imagenes/disenadores/EeroSaarinen.jpg"
				     srcset="imagenes/disenadores/EeroSaarinen@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Eileen Gray</h6>
				<img class="img-responsive" src="imagenes/disenadores/EileenGray.jpg"
				     srcset="imagenes/disenadores/EileenGray@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Florence Knoll</h6>
				<img class="img-responsive" src="imagenes/disenadores/FlorenceKnoll.jpg"
				     srcset="imagenes/disenadores/FlorenceKnoll@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Harry Bertoia</h6>
				<img class="img-responsive" src="imagenes/disenadores/HarryBertoia.jpg"
				     srcset="imagenes/disenadores/HarryBertoia@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Isamu Noguchi</h6>
				<img class="img-responsive" src="imagenes/disenadores/IsamuNoguchi.jpg"
				     srcset="imagenes/disenadores/IsamuNoguchi@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Jean Prouvé</h6>
				<img class="img-responsive" src="imagenes/disenadores/JeanProuve.jpg"
				     srcset="imagenes/disenadores/JeanProuve@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Le Corbusier</h6>
				<img class="img-responsive" src="imagenes/disenadores/LeCorbusier.jpg"
				     srcset="imagenes/disenadores/LeCorbusier@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Marcel Breuer</h6>
				<img class="img-responsive" src="imagenes/disenadores/MarcelBreuer.jpg"
				     srcset="imagenes/disenadores/MarcelBreuer@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Mies van der Rohe</h6>
				<img class="img-responsive" src="imagenes/disenadores/VanDerRohe.jpg"
				     srcset="imagenes/disenadores/VanDerRohe@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Philippe Starck</h6>
				<img class="img-responsive" src="imagenes/disenadores/PhilippeStarck.jpg"
				     srcset="imagenes/disenadores/PhilippeStarck@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Achille & Pier Castiglioni</h6>
				<img class="img-responsive" src="imagenes/disenadores/Achille.jpg" srcset="imagenes/disenadores/Achille@2x.jpg 2x"
				     alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Tom Dixon</h6>
				<img class="img-responsive" src="imagenes/disenadores/TomDixon.jpg" srcset="imagenes/disenadores/TomDixon@2x.jpg 2x"
				     alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Verner Panton</h6>
				<img class="img-responsive" src="imagenes/disenadores/VernerPanton.jpg"
				     srcset="imagenes/disenadores/VernerPanton@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Serge Mouille</h6>
				<img class="img-responsive" src="imagenes/disenadores/SergeMouille.jpg"
				     srcset="imagenes/disenadores/SergeMouille@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Xavier Pauchard</h6>
				<img class="img-responsive" src="imagenes/disenadores/XavierPauchard.jpg"
				     srcset="imagenes/disenadores/XavierPauchard@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-md-12 read-more">
			<button class="btn btn-default btn-rounded toggleHeight" data-element="disenadores" data-action="show">VER MÁS</button>
			<button class="btn btn-default btn-rounded toggleHeight hide" data-element="disenadores" data-action="hide">VER MENOS</button>
		</div>
	</section>
</div>

<!-- Estilos -->
<div class="container">
	<section class="row" id="estilos">
		<h5 class="title">Estilos</h5>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Tolix Design</h6>
				<img class="img-responsive" src="imagenes/colecciones/tolix-design.jpg" srcset="imagenes/colecciones/tolix-design@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Tower Design</h6>
				<img class="img-responsive" src="imagenes/colecciones/iluminacion.jpg" srcset="imagenes/colecciones/iluminacion@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Modern Classics</h6>
				<img class="img-responsive" src="imagenes/colecciones/lienzos-vinilos.jpg" srcset="imagenes/colecciones/lienzos-vinilos@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Pop</h6>
				<img class="img-responsive" src="imagenes/colecciones/pop.jpg" srcset="imagenes/colecciones/pop@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Color edition</h6>
				<img class="img-responsive" src="imagenes/colecciones/pop.jpg" srcset="imagenes/colecciones/pop@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Transparente</h6>
				<img class="img-responsive" src="imagenes/colecciones/pop.jpg" srcset="imagenes/colecciones/pop@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Vintage</h6>
				<img class="img-responsive" src="imagenes/colecciones/vintage.jpg" srcset="imagenes/colecciones/vintage@2x.jpg 2x"
				     alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Rústico</h6>
				<img class="img-responsive" src="imagenes/colecciones/rustico.jpg" srcset="imagenes/colecciones/rustico@2x.jpg 2x"
				     alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Industrial</h6>
				<img class="img-responsive" src="imagenes/colecciones/industrial.jpg" srcset="imagenes/colecciones/industrial@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Nórdico</h6>
				<img class="img-responsive" src="imagenes/colecciones/nordico.jpg" srcset="imagenes/colecciones/nordico@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>New York</h6>
				<img class="img-responsive" src="imagenes/colecciones/new-york.jpg" srcset="imagenes/colecciones/new-york@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Objeto decorativo</h6>
				<img class="img-responsive" src="imagenes/colecciones/objeto-decorativo.jpg" srcset="imagenes/colecciones/objeto-decorativo@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-md-12 read-more">
			<button class="btn btn-default btn-rounded toggleHeight" data-element="estilos" data-action="show">VER MÁS</button>
			<button class="btn btn-default btn-rounded toggleHeight hide" data-element="estilos" data-action="hide">VER MENOS</button>
		</div>
	</section>
</div>

<!-- Colecciones -->
<div class="container">
	<section class="row" id="colecciones">
		<h5 class="title">Colecciones</h5>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Baño</h6>
				<img class="img-responsive" src="imagenes/colecciones/bano.jpg" srcset="imagenes/colecciones/bano@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Cocina</h6>
				<img class="img-responsive" src="imagenes/colecciones/cocina.jpg" srcset="imagenes/colecciones/cocina@2x.jpg 2x"
				     alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Trabajo</h6>
				<img class="img-responsive" src="imagenes/colecciones/trabajo.jpg" srcset="imagenes/colecciones/trabajo@2x.jpg 2x"
				     alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Descanso</h6>
				<img class="img-responsive" src="imagenes/colecciones/descanso.jpg" srcset="imagenes/colecciones/descanso@2x.jpg 2x"
				     alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Dormitorio</h6>
				<img class="img-responsive" src="imagenes/colecciones/dormitorio.jpg" srcset="imagenes/colecciones/dormitorio@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Niños</h6>
				<img class="img-responsive" src="imagenes/colecciones/ninos.jpg" srcset="imagenes/colecciones/ninos@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Verano</h6>
				<img class="img-responsive" src="imagenes/colecciones/verano.jpg" srcset="imagenes/colecciones/verano@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>Navidad</h6>
				<img class="img-responsive" src="imagenes/colecciones/navidad.jpg" srcset="imagenes/colecciones/navidad@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-xs-6 col-md-3">
			<a href="#">
				<h6>San Valentín</h6>
				<img class="img-responsive" src="imagenes/colecciones/san-valentin.jpg" srcset="imagenes/colecciones/san-valentin@2x.jpg 2x" alt="#">
			</a>
		</div>
		<div class="col-md-12 read-more">
			<button class="btn btn-default btn-rounded toggleHeight" data-element="colecciones" data-action="show">VER MÁS</button>
			<button class="btn btn-default btn-rounded toggleHeight hide" data-element="colecciones" data-action="hide">VER MENOS</button>
		</div>
	</section>
</div>

<!-- Banners -->
<div class="bgDark">
	<div class="container">
		<section class="row banners">
			<div class="col-md-4 banner">
				<a href="#" title="inscríbete y te regalamos 10€">
					<img class="img-responsive" src="imagenes/banners/inscribete.jpg" alt="inscríbete y te regalamos 10€">
				</a>
			</div>
			<div class="col-md-4 banner">
				<a href="" title="¿eres profesional? Regístrate aquí">
					<img class="img-responsive" src="imagenes/banners/profesional.jpg" alt="¿eres profesional? Regístrate aquí">
				</a>
			</div>
			<div class="col-md-4 banner">
				<a href="#" title="Enviamos a toda Europa">
					<img class="img-responsive" src="imagenes/banners/envios.jpg" alt="Enviamos a toda Europa">
				</a>
			</div>
			<div class="col-xs-12 hidden-xs banner puntos-de-venta">
				<a href="#" title="puntos de venta">
					<img class="img-responsive" src="imagenes/banners/puntosventa.jpg" alt="puntos de venta">
					<button class="btn btn-default btn-rounded">puntos de venta</button>
				</a>
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

<section class="texto-seo">
	<div class="container">
		<p><strong>SuperStudio</strong> es una empresa joven, creada en 2005 con el objetivo de ofrecer piezas de <strong>diseño de calidad a precios muy competitivos</strong>. Los clientes tienen acceso a nuestro <strong>gran catálogo de mobiliario y decoración</strong> a través del sitio web www.superestudio.com. Es la forma más rápida y cómoda de adquirir nuestras piezas desde cualquier parte, ya que vendemos <strong>en todo el territorio nacional y en otros países</strong>. A nuestra presencia online, añadimos la apertura de varios <strong>showrooms</strong>, donde el cliente puede ver, tocar y sentir por él mismo las cualidades de nuestros artículos. Primero abrimos en <strong>Barcelona</strong>, ciudad pionera de diseño en España, y después en <strong>Madrid</strong>. Desde el principio, hemos mantenido una actitud abierta e innovadora. No nos enfocamos únicamente al <strong>cliente particular</strong>, sino que también trabajamos con <strong>hoteles, restaurantes y otras empresas</strong>, participando en <strong>grandes proyectos de interiorismo y hostelería</strong>. Esta flexibilidad ha hecho de nosotros un referente en el sector. SuperStudio mira hacia el futuro con nuevos retos de expansión a nivel nacional e internacional, nuevos canales comerciales y nuevas necesidades de un cliente que está cambiando sus hábitos de compra. La <strong>ampliación constante de nuestra gama de productos</strong><strong> </strong>nos hace más versátiles y mejora nuestra capacidad de adaptación. La clave está en la profesionalidad de un equipo comprometido, con vocación y potencial. Nuestro método de trabajo apuesta por la <strong>estandarización de los procesos para lograr un mayor control y eficacia</strong>, pero también por la <strong>innovación</strong>, bajo una filosofía de <strong>formación continua</strong>. El objetivo es detectar fácilmente los puntos débiles y convertirlos en futuras oportunidades. En definitiva, adelantarse a los cambios, estar pendientes de las <strong>últimas tendencias en diseño</strong>, conseguir los mejores precios y cumplir con las exigencias de nuestros clientes. Es la única forma de hacer un buen trabajo.</p>
	</div>
</section>

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

<script data-main="includes/scripts/default" src="includes/scripts/lib/require.min.js"></script>

</body>
</html>
<!--#include virtual="/includes/motor/cierre.asp"-->