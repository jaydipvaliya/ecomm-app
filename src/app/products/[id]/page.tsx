
export default async function ProductPage({
	params,
}: {
	params: { id: string };
}) {
	const { id } = params;

	const response = await fetch(`http://localhost:3006/product/${id}`);
	const product = await response.json();

	return (
		<div>
			<h1>{product.name}</h1>

			<p>{product.price}</p>
		</div>
	);
}