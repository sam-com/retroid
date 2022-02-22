export type SpacerDirection = 'vertical' | 'horizontal';

type SpacerProps = {
	direction: SpacerDirection;
};

export function Spacer(props: SpacerProps) {
	return (
		<span className={props.direction === 'vertical' ? ' mt-auto' : 'ml-auto'} />
	);
}
