export default function StatusPill({ status, t }) {
  return <span className={`status-pill status-${status.toLowerCase()}`}><span />{t.statuses[status]}</span>
}
