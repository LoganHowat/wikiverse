import React from 'react';
import { Page } from './Page';

export const PagesList = ({pages, wikiClickHandle}) => {
	return <>
		{
			pages.map((page, idx) => {
				return <a onClick={() => wikiClickHandle(idx)}>
					<Page page={page} key={idx} />
				</a>
			})
		}
	</>
} 
