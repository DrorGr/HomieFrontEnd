import { orderService } from '../../services/order-service'

export function getOrders(user) {
    return async dispatch => {
        try {
            const orders = await orderService.query(user)
            dispatch({ type: 'SET_ORDERS', orders })
        } catch (err) {
            console.log('OrderActions: err in getOrders', err)
        }
    }
}

export function addOrder(trip, stay, loggedInUser) {
    return async dispatch => {
        try {
            const addedOrder = await orderService.add(trip, stay, loggedInUser)
            
            dispatch({ type: 'ADD_ORDER', order: addedOrder })

        } catch (err) {
            console.log('OrderActions: err in addOrder', err)
        }
    }
}

export function updateOrder(order) {
    return async dispatch => {
        try {
            const updatedOrder = await orderService.update(order)
            dispatch({ type: 'UPDATE_ORDER', order: updatedOrder })
        } catch (err) {
            console.log('OrderActions: err in update Order', err)
        }
    }
}

export function removeOrder(orderId) {
    return async dispatch => {
        try {
            await orderService.remove(orderId)
            dispatch({ type: 'REMOVE_ORDER', orderId })
        } catch (err) {
            console.log('OrderActions: err in removeOrder', err)
        }
    }
}


