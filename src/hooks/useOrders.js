import { useEffect, useState } from 'react'
import { addOrder, getOrders, markOrdersSynced } from '../services/storage'

export function useOrders() {
  const [orders, setOrders] = useState([])
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [pendingSync, setPendingSync] = useState(0)

  useEffect(() => {
    getOrders().then(setOrders)
    const online = () => { setIsOnline(true); markOrdersSynced().then((syncedOrders) => { setOrders(syncedOrders); setPendingSync(0) }) }
    const offline = () => setIsOnline(false)
    window.addEventListener('online', online)
    window.addEventListener('offline', offline)
    return () => { window.removeEventListener('online', online); window.removeEventListener('offline', offline) }
  }, [])

  async function saveOrder(order) {
    const nextOrders = await addOrder({ ...order, id: crypto.randomUUID(), createdAt: new Date().toISOString(), synced: isOnline })
    setOrders(nextOrders)
    if (!isOnline) setPendingSync((count) => count + 1)
  }

  return { orders, saveOrder, isOnline, pendingSync }
}
