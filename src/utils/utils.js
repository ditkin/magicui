import { createAction } from 'redux-actions'
import * as RequestStatusTypes from 'MeetingsBase/constants/RequestStatusTypes'

function getStatusIndex(type) {
  const statusIndex = type ? type.lastIndexOf('_') : -1
  if (statusIndex === -1) {
    throw new Error(
      `exected an request action type in the form of \${NAMESPACE}_\${REQUEST_STATUS} but received ${type}`
    )
  }
  return statusIndex
}

function getRequestNamespace(type) {
  const statusIndex = getStatusIndex(type)
  return type.substring(0, statusIndex)
}

function getRequestStatus(type) {
  const statusIndex = getStatusIndex(type)
  const requestStatus = type.substring(statusIndex + 1)
  invariant(
    RequestStatusTypes.hasOwnProperty(requestStatus),
    'expected `requestStatus` to be defined in `MeetingsBase/constants/RequestStatusTypes` but got `%s`',
    requestStatus
  )
  return requestStatus
}

export function createRequestStatusMeta(type) {
  const namespace = getRequestNamespace(type)
  const requestStatus = getRequestStatus(type)
  return {
    request: {
      key: namespace,
      status: requestStatus,
    },
  }
}

export function createRequestAction(
  type,
  payloadCreator = null,
  metadataCreator = () => ({})
) {
  return createAction(type, payloadCreator, (...payload) => ({
    ...metadataCreator(...payload),
    ...createRequestStatusMeta(type),
  }))
}
