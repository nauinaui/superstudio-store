            <h5 class="titulo">Top ventas</h5>
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

                                <div class="col-xs-6 col-md-3">
                                    <a href="<%=link_detalle_destacado%>" class="item tooltip"<% if oferta = True Then %> title="Oferta por tiempo limitado"<% end if %>>
                                        <% if oferta = True Then %>
                                            <div class="badge badge-rojo">
                                                <img src="imagenes/iconos/badgeTiempo.png" srcset="imagenes/iconos/badgeTiempo@2x.png 2x" alt="Oferta por tiempo limitado">
                                            </div>
                                        <% end if %>
                                        <div class="info">
                                            <div class="nombre"><%=limitar_texto(nombre,40)%></div>
                                            <div class="categoria"><%=nombre_cat%></div>
                                        </div>
                                        <img src="<%=var_src_img%>/<%=muestra_imagen(url_imagen_destacado)%>" alt="<%=nombre%>">
                                        <span class="precio">
                                        <% if oferta = true Then %>
                                            <span><%if pcteColorDescuento > 0 then response.write "Desde" & "&nbsp;" else Response.Write(et_general(79)) ' ahora %></span> <%=mostrar_precio_pais(precio_final,null,true,true)%>
                                        <% else %>
                                            <%=mostrar_precio_pais(precio_sin_descuento,null,true,true)%>
                                        <% end if %>

                                        <!--span>€</span--></span>
                                        <% if oferta = True Then %><span class="text-desc">-<%=porc_oferta%>% descuento</span><% end if %>
                                    </a>
                                </div>


							<%	rs.MoveNext
								contador = contador + 1
								Response.Flush()
							Loop
						end if
						rs.Close
						%>