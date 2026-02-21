function baseHtml(title, body) {
	return `
		<!DOCTYPE html>
		<html lang="es">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>${title}</title>
				<link rel="stylesheet" href="/styles.css" />
			</head>
			<body>
				${body}
				<script>
					async function deleteProduct(productId) {
						if (confirm('¿Estás seguro de eliminar este producto?')) {
							try {
								const url = '/dashboard/' + productId + '/delete';
								const response = await fetch(url, { method: 'DELETE' });
								if (response.ok) {
									const article = document.querySelector('[data-product-id="' + productId + '"]');
									if (article) article.remove();
								}
							} catch (error) {
								console.error('Error al eliminar:', error);
								alert('Error al eliminar el producto');
							}
						}
					}
				</script>
			</body>
		</html>
	`;
}

module.exports = baseHtml;