import {styled} from "@mui/material";

export const InnerText = styled('div')`
	display: inline-block;
	border-bottom: ${({border}) => border ? '1px solid rgba(0, 0, 0, 0.23)' : 'none' };
  color: ${props => props.color ? props.color : '#305165'};
`;

export const Container = styled('div')`
	overflow: auto;
	padding: 1rem;
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
	align-content: flex-start;
	align-items: center;
	background: rgb(71,58,112);
	background: linear-gradient(90deg, rgba(71,58,112,1) 0%, rgba(40,39,85,1) 25%, rgba(77,8,77,1) 60%, rgba(89,17,81,1) 100%);
	min-height: ${props => props.hasOwnProperty('dimensions') ? props.dimensions.height + 'px' : undefined};
	min-width: ${props => props.hasOwnProperty('dimensions') ? props.dimensions.width + 'px' : undefined};
	${props => typeof props.style === 'object' ? {...props.style} : props.style}
`

export const Label = styled('label')`
	font-size: 0.75rem;
	margin-bottom: 3px;
	display: inline-block;
	margin-right: ${props => props.inline ? '1rem' : 0};
	& p {
		color: ${props => props.labelColor ? props.labelColor : ''};
	}
`;
