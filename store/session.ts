import * as aicevote from "aicevote";

export const state = () => ({
  isVisitedHome: false,
  sessionID: null,
  sessionToken: null,
  name: "",
  imageURI: ""
});

export const mutations = {
  auth(state: any, data: { sessionToken: string, name: string, imageURI: string }) {
    state.sessionToken = data.sessionToken;
    state.name = data.name;
    state.imageURI = data.imageURI;
  },
  signin(state: any, sessionID: string) {
    state.sessionID = sessionID;
  },
  signout(state: any) {
    state.sessionID = null;
    state.sessionToken = null;
    state.name = "";
    state.imageURI = "";
  },
  visitHome(state: any) {
    state.isVisitedHome = true;
  }
};

export const actions = {
  async auth(context: any) {
    try {
      const sessionToken = await aicevote.getSessionToken(context.state.sessionID);
      const profile = await aicevote.getMyProfile(sessionToken);
      context.commit("auth", {
        sessionToken,
        name: profile.name,
        imageURI: profile.imageURI
      });
    } catch (e) {
      context.commit("signout");
    }
  }
};
