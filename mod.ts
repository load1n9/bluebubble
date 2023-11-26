export interface BlueBubbleOptions {
  password: string;
  host: string;
}

export class BlueBubble {
  #password: string;
  #host: string;

  constructor(options: BlueBubbleOptions) {
    this.#password = options.password;
    this.#host = options.host;
  }

  async lock() {
    return await (await fetch(
      `https://${this.#host}/api/v1/mac/lock?password=${this.#password}`,
    )).json();
  }

  async getMyDevicesLocations() {
    return await (await fetch(
      `https://${this.#host}/api/v1/icloud/findmy/devices?password=${this.#password}`,
    )).json();
  }

  async getMyFriendsLocations() {
    return await (await fetch(
      `https://${this.#host}/api/v1/icloud/findmy/friends?password=${this.#password}`,
    )).json();
  }

  async refreshMyDevicesLocations() {
    return await (await fetch(
      `https://${this.#host}/api/v1/icloud/findmy/devices/refresh?password=${this.#password}`,
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      },
    )).json();
  }

  async refreshMyFriendsLocations() {
    return await (await fetch(
      `https://${this.#host}/api/v1/icloud/findmy/friends/refresh?password=${this.#password}`,
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      },
    )).json();
  }

  async getMediaTotalPerChat() {
    return await (await fetch(
      `https://${this.#host}/api/v1/server/statistics/media/chat?password=${this.#password}`,
    )).json();
  }

  async getMediaTotal() {
    return await (await fetch(
      `https://${this.#host}/api/v1/server/statistics/media?password=${this.#password}`,
    )).json();
  }

  async getIMessageEntityTotal() {
    return await (await fetch(
      `https://${this.#host}/api/v1/server/statistics/totals?password=${this.#password}`,
    )).json();
  }

  async checkForUpdates() {
    return await (await fetch(
      `https://${this.#host}/api/v1/server/update/check?password=${this.#password}`,
    )).json();
  }

  async getServerMetadata() {
    return await (await fetch(
      `https://${this.#host}/api/v1/server/info?password=${this.#password}`,
    )).json();
  }

  async getServerLogs() {
    return await (await fetch(
      `https://${this.#host}/api/v1/server/logs?password=${this.#password}`,
    )).json();
  }

  async getServerAlerts() {
    return await (await fetch(
      `https://${this.#host}/api/v1/server/alert?password=${this.#password}`,
    )).json();
  }

  async markServerAlertAsRead(ids: number[]) {
    return await (await fetch(
      `https://${this.#host}/api/v1/server/alert/read?password=${this.#password}`,
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ids,
        }),
      },
    )).json();
  }

  async registerDevice(name: string, identifier = "") {
    return await (await fetch(
      `https://${this.#host}/api/v1/fcm/device?password=${this.#password}`,
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          identifier,
        }),
      },
    )).json();
  }

  async getClientConfig(name: string, identifier = "") {
    return await (await fetch(
      `https://${this.#host}/api/v1/fcm/client?password=${this.#password}`,
      {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          identifier,
        }),
      },
    )).json();
  }

  async addParticipantToChat(chatGuid: string, address: string) {
    return await (await fetch(
      `https://${this.#host}/api/v1/chat/${chatGuid}/participant?password=${this.#password}`,
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address,
        }),
      },
    )).json();
  }

  async removeParticipantFromChat(chatGuid: string, address: string) {
    return await (await fetch(
      `https://${this.#host}/api/v1/chat/${chatGuid}/participant?password=${this.#password}`,
      {
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address,
        }),
      },
    )).json();
  }

  async leaveChat(chatGuid: string) {
    return await (await fetch(
      `https://${this.#host}/api/v1/chat/${chatGuid}/leave?password=${this.#password}`,
      {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      },
    )).json();
  }

  async getChatCount() {
    return await (await fetch(
      `https://${this.#host}/api/v1/chat/count?password=${this.#password}`,
    )).json();
  }

  async getChatMessages(chatGuid: string) {
    return await (await fetch(
      `https://${this.#host}/api/v1/chat/${chatGuid}/message?password=${this.#password}`,
    )).json();
  }

  async createNewChat(addresses: string[], message: string) {
    return await (await fetch(
      `https://${this.#host}/api/v1/chat/new?password=${this.#password}`,
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          addresses,
          message,
        }),
      },
    )).json();
  }

  async markChatAsRead(chatGuid: string) {
    return await (await fetch(
      `https://${this.#host}/api/v1/chat/${chatGuid}/read?password=${this.#password}`,
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      },
    )).json();
  }

  async markChatAsUnread(chatGuid: string) {
    return await (await fetch(
      `https://${this.#host}/api/v1/chat/${chatGuid}/unread?password=${this.#password}`,
      {
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      },
    )).json();
  }

  async startSendingTypingIndicator(chatGuid: string) {
    return await (await fetch(
      `https://${this.#host}/api/v1/chat/${chatGuid}/typing?password=${this.#password}`,
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      },
    )).json();
  }

  async stopSendingTypingIndicator(chatGuid: string) {
    return await (await fetch(
      `https://${this.#host}/api/v1/chat/${chatGuid}/typing?password=${this.#password}`,
      {
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      },
    )).json();
  }

  async deleteChat(chatGuid: string) {
    return await (await fetch(
      `https://${this.#host}/api/v1/chat/${chatGuid}?password=${this.#password}`,
      {
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      },
    )).json();
  }

  async updateChat(chatGuid: string, displayName: string) {
    return await (await fetch(
      `https://${this.#host}/api/v1/chat/${chatGuid}?password=${this.#password}`,
      {
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          displayName,
        }),
      },
    )).json();
  }

  async getHandleByAddress(address: string) {
    return await (await fetch(
      `https://${this.#host}/api/v1/handle/${address}?password=${this.#password}`,
    )).json();
  }

  async getHandleCount() {
    return await (await fetch(
      `https://${this.#host}/api/v1/handle/count?password=${this.#password}`,
    )).json();
  }

  async getHandleFocusStatus(address: string) {
    return await (await fetch(
      `https://${this.#host}/api/v1/handle/${address}/focus?password=${this.#password}`,
    )).json();
  }

  async queryHandles() {
    return await (await fetch(
      `https://${this.#host}/api/v1/handle/query?password=${this.#password}`,
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      },
    )).json();
  }

  async getMessageCount() {
    return await (await fetch(
      `https://${this.#host}/api/v1/message/count?password=${this.#password}`,
    )).json();
  }

  async getSentMessageCount() {
    return await (await fetch(
      `https://${this.#host}/api/v1/message/count/me?password=${this.#password}`,
    )).json();
  }

  async getMessageByGuid(guid: string) {
    return await (await fetch(
      `https://${this.#host}/api/v1/message/${guid}?password=${this.#password}`,
    )).json();
  }

  async queryMessages() {
    return await (await fetch(
      `https://${this.#host}/api/v1/message/query?password=${this.#password}`,
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      },
    )).json();
  }

  async sendText(
    chatGuid: string,
    tempGuid: string,
    message: string,
    method: "apple-script" | "private-api" = "apple-script",
    subject = "",
    effectId = "",
    selectedMessageGuid = "",
    partIndex = 0,
  ) {
    return await (await fetch(
      `https://${this.#host}/api/v1/message/text?password=${this.#password}`,
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatGuid,
          tempGuid,
          message,
          method,
          subject,
          effectId,
          selectedMessageGuid,
          partIndex,
        }),
      },
    )).json();
  }

  async sendReaction(
    chatGuid: string,
    selectedMessageGuid = "",
    reaction:
      | `love`
      | `like`
      | `dislike`
      | `laugh`
      | `emphasize`
      | `question`
      | "" = "",
    partIndex = 0,
  ) {
    return await (await fetch(
      `https://${this.#host}/api/v1/message/reaction?password=${this.#password}`,
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatGuid,
          selectedMessageGuid,
          reaction,
          partIndex,
        }),
      },
    )).json();
  }

  async editMessage(
    messageGuid: string,
    editedMessage: string,
    backwardsCompatibilityMessage: string,
    partIndex = 0,
  ) {
    return await (await fetch(
      `https://${this.#host}/api/v1/message/${messageGuid}/edit?password=${this.#password}`,
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          editedMessage,
          backwardsCompatibilityMessage,
          partIndex,
        }),
      },
    )).json();
  }

  async unsendMessage(messageGuid: string, partIndex = 0) {
    return await (await fetch(
      `https://${this.#host}/api/v1/message/${messageGuid}/unsend?password=${this.#password}`,
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ partIndex }),
      },
    )).json();
  }

  async notifyForSilencedMessage(messageGuid: string) {
    return await (await fetch(
      `https://${this.#host}/api/v1/message/${messageGuid}/notify?password=${this.#password}`,
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      },
    )).json();
  }

  async getContacts() {
    return await (await fetch(
      `https://${this.#host}/api/v1/contact?password=${this.#password}`,
    )).json();
  }

  async queryContacts(contacts: string[] = []) {
    return await (await fetch(
      `https://${this.#host}/api/v1/contact/query?password=${this.#password}`,
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contacts }),
      },
    )).json();
  }

  async getThemes() {
    return await (await fetch(
      `https://${this.#host}/api/v1/backup/theme?password=${this.#password}`,
    )).json();
  }

  async ping() {
    return await (await fetch(
      `https://${this.#host}/api/v1/ping?password=${this.#password}`,
    )).json();
  }
}
