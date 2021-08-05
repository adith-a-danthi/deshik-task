import { Random } from 'mockjs'

/**
 * @param count: number of notifications to add
 * @param currentLength: current number of notifications
 * @return dataItems: updated list of notifications
 * */
export const getNotificationData = (count, currentLength) => {
  const dataItems = []
  for (let i = 0; i < count; i++) {
    dataItems.push({
      id: Random.increment(currentLength + i),
      title: Random.name(),
      message: Random.sentence(5),
      // timestamp: parseInt(Random.datetime('T')),
      timestamp: Random.integer(0, 31620599652),
      image: Random.image('64x64', Random.color()),
      unread: true
    })
  }
  return dataItems
}
export const pageSize = 20
