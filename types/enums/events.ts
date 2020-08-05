export enum Events {
  // Predefined
  Error = "error",
  Connect = "connect",
  Disconnect = "disconnect",
  Message = "message",
  Close = "close",
  Data = "data",

  // Authentication
  Authentication = "Authentication",
  Unauthorized = "Unauthorized",

  // Chat
  ChatMessage = "chat-message",
  MessageRead = "message-read",

  // Notifications
  Notification = "Notification",

  // System updates
  AppUpdate = "AppUpdate",
}
