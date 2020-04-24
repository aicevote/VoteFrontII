import * as aicevote from "aicevote";

export const state = () => ({
  isVisitedHome: false,
  sessionID: null,
  sessionToken: null,
  name: "",
  imageURI: ""
});

export const mutations = {
  signin(state: any, data: { sessionID: string, sessionToken: string, name: string, imageURI: string }) {
    state.sessionID = data.sessionID;
    state.sessionToken = data.sessionToken;
    state.name = data.name;
    state.imageURI = data.imageURI;
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
  async signin(context: any, sessionID: string) {
    try {
      const sessionToken = await aicevote.getSessionToken(sessionID);
      const profile = await aicevote.getMyProfile(sessionToken);
      context.commit("signin", {
        sessionID,
        sessionToken,
        name: profile.name,
        imageURI: profile.imageURI
      });
    } catch (e) {
      context.commit("signout");
    }
  }
};
