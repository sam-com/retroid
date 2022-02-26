export type SpacerDirection = 'vertical' | 'horizontal';

type SpacerProps = {
	direction: SpacerDirection;
};

export function Spacer(props: SpacerProps) {
	return (
		<div className={props.direction === 'vertical' ? ' mt-auto' : 'ml-auto'} />
	);
}
