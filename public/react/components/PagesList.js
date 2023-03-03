import React from 'react';
import { Page } from './Page';
import '../../style.css';

export const PagesList = ({pages, wikiClickHandle}) => {
	return <>
		{
			pages.map((page, idx) => {
				return <a id='wikiLink' onClick={() => wikiClickHandle(idx)}>
					<Page page={page} key={idx} />
				</a>
			})
		}
	</>
} 
