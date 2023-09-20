import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
import TagsListInline from '@theme/TagsListInline';
import styles from './styles.module.css';

const months = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
];


function Pencil() {
  return (
    <svg
      fill="currentColor"
      height="20"
      width="20"
      viewBox="0 0 40 40"
      className="iconEdit_node_modules-@docusaurus-theme-classic-lib-theme-Icon-Edit-styles-module"
      aria-hidden="true"
    >
      <g>
        <path d="m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z" />
      </g>
    </svg>
  )
}

const formatDate = (timestamp) => {
  // Create a Date object from the timestamp
  const date = new Date(timestamp * 1000);

  // Get the day, month, and year from the date
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  // Build the date in the desired format
  const formattedDate = `${day} de ${months[month]} de ${year}`;

  return formattedDate;
}

function TagsRow(props) {
  return (
    <div
      className={clsx(
        ThemeClassNames.docs.docFooterTagsRow,
        'row margin-bottom--sm',
      )}>
      <div className="col">
        <TagsListInline {...props} />
      </div>
    </div>
  );
}
function EditMetaRow({
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
  // formattedLastUpdatedAt,
}) {
  return (
    <div className={clsx(ThemeClassNames.docs.docFooterEditMetaRow, 'row')}>
      <div className="col">
        {editUrl && (
          <a href={editUrl} target="_blank" rel="noreferrer noopener" className="theme-edit-this-page">
            <Pencil />
            Editar esta pagina
          </a>
        )}
      </div>

      <div className={clsx('col', styles.lastUpdated)}>
        {(lastUpdatedAt || lastUpdatedBy) && (
          <span className="theme-last-updated">
            Ultima actualización el <b><time dateTime="2018-10-14T07:27:35.000Z">{formatDate(lastUpdatedAt)}</time></b> por <b>{lastUpdatedBy}</b>
          </span>
        )}
      </div>
    </div>
  );
}
export default function DocItemFooter() {
  const {metadata} = useDoc();
  const {editUrl, lastUpdatedAt, formattedLastUpdatedAt, lastUpdatedBy, tags} =
    metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
  if (!canDisplayFooter) {
    return null;
  }
  return (
    <footer
      className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
      {canDisplayTagsRow && <TagsRow tags={tags} />}
      {canDisplayEditMetaRow && (
        <EditMetaRow
          editUrl={editUrl}
          lastUpdatedAt={lastUpdatedAt}
          lastUpdatedBy={lastUpdatedBy}
          formattedLastUpdatedAt={formattedLastUpdatedAt}
        />
      )}
    </footer>
  );
}
