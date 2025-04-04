enum AppState {
  Data,
  NotFound,
  Conflict,

  Created,
  NotCreated,
  Updated,
  NotUpdated,
  Deleted,
  NotDeleted,

  Authorized,
  Unauthorized,

  BadRequest,
  ServerError,
  FrontError,
}

export default AppState;
