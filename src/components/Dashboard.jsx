import { ArrowUpRight, ClipboardList, Clock3, Plus, Scissors, Shirt, Sparkles } from 'lucide-react'
import FestivalBanner from './FestivalBanner'
import StatusPill from './StatusPill'

const sampleOrders = [
  { id: 'sample-1', customerName: 'Meena Sahu', outfit: 'Saree Blouse', deliveryDate: '2026-08-21', status: 'Stitching' },
  { id: 'sample-2', customerName: 'Kavita Verma', outfit: 'Chaniya Choli', deliveryDate: '2026-08-23', status: 'Cutting' },
  { id: 'sample-3', customerName: 'Sunita Yadav', outfit: 'Lugra', deliveryDate: '2026-08-25', status: 'Pending' },
]

export default function Dashboard({ t, language, orders, onNewOrder }) {
  const visibleOrders = orders.length ? orders : sampleOrders
  const stats = [{ label: t.totalOrders, value: orders.length || 12, change: '+3 this week', icon: ClipboardList, tone: 'teal' }, { label: t.stitching, value: 5, change: '2 due today', icon: Scissors, tone: 'coral' }, { label: t.ready, value: 3, change: 'Pickup pending', icon: Shirt, tone: 'gold' }, { label: t.dueSoon, value: 4, change: 'Next 3 days', icon: Clock3, tone: 'blue' }]
  const formatDate = (date) => new Date(date).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN', { day: 'numeric', month: 'short' })
  return <div className="dashboard"><div className="page-heading"><div><p className="eyebrow">{new Date().toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}</p><h1>{t.welcome}</h1><p className="subtitle">{t.overview}</p></div><button className="primary-button" onClick={onNewOrder}><Plus size={18} />{t.addOrder}</button></div><FestivalBanner t={t} /><div className="stats-grid">{stats.map(({ label, value, change, icon: Icon, tone }) => <article className="stat-card" key={label}><div className={`stat-icon ${tone}`}><Icon size={20} /></div><div><p>{label}</p><strong>{value}</strong><small><ArrowUpRight size={13} />{change}</small></div></article>)}</div><section className="orders-section"><div className="section-heading"><div><h2>{t.recentOrders}</h2><p>{visibleOrders.length} {t.ordersCount}</p></div><button className="outline-button">{t.viewAll}<ArrowUpRight size={16} /></button></div><div className="orders-table"><div className="table-head"><span>{t.customer}</span><span>{t.outfit}</span><span>{t.delivery}</span><span>{t.status}</span></div>{visibleOrders.map((order) => <div className="order-row" key={order.id}><div className="customer-cell"><span className="avatar">{order.customerName?.charAt(0) || 'क'}</span><strong>{order.customerName}</strong></div><span className="outfit-cell"><Sparkles size={14} />{t.outfits[order.outfit] || order.outfit}</span><span className="date-cell">{formatDate(order.deliveryDate)}</span><StatusPill status={order.status} t={t} /></div>)}</div><div className="mobile-order-list">{visibleOrders.map((order) => <div className="mobile-order" key={order.id}><div className="customer-cell"><span className="avatar">{order.customerName?.charAt(0) || 'क'}</span><strong>{order.customerName}</strong></div><StatusPill status={order.status} t={t} /><p>{t.outfits[order.outfit] || order.outfit} · {formatDate(order.deliveryDate)}</p></div>)}</div></section></div>
}
