/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @param {Object} props            Properties passed to the function.
 * @param {Object} props.attributes Available block attributes.
 * @return {WPElement} Element to render.
 */
/*export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	return <div {...blockProps}>{attributes.message}</div>;
}*/
export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps}>
			<div class="box">
				<div class="shadow-box">
					<div class="text-content">
						<span class="text-content-1">{attributes.message1}</span>
						<br></br>
						<span class="text-content-2">{attributes.message2}</span>
					</div>
					<div class="text-content-3">
						{attributes.message3}
					</div>
					<a>{attributes.buttonText}</a>
				</div>
			</div>
		</div>
	);
}
