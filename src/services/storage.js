import localforage from 'localforage'

const ordersStore = localforage.createInstance({ name: 'Silai-tailor', storeName: 'orders' })

export async function getOrders() {
  const orders = await ordersStore.getItem('orders')
  return orders || []
}

export async function saveOrders(orders) {
  await ordersStore.setItem('orders', orders)
}

export async function addOrder(order) {
  const orders = await getOrders()
  const nextOrders = [order, ...orders]
  await saveOrders(nextOrders)
  return nextOrders
}

export async function markOrdersSynced() {
  const orders = await getOrders()
  const syncedOrders = orders.map((order) => ({ ...order, synced: true }))
  await saveOrders(syncedOrders)
  return syncedOrders
}
