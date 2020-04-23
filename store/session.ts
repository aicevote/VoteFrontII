import * as aicevote from "aicevote";
export const state = () => ({
  isVisitedHome: false,
  sessionID: null,
  sessionToken: null,
  name: "",
  imageURI: ""
});

export const mutations = {
  async signin(state: any, sessionID: string) {
    state.sessionID = sessionID;
    try {
      state.sessionToken = await aicevote.getSessionToken(state.sessionID);
      const profile = await aicevote.getMyProfile(state.sessionToken);
      state.name = profile.name;
      state.imageURI = profile.imageURI;
    } catch (e) {
      state.sessionID = null;
      state.sessionToken = null
      state.name = "";
      state.imageURI = "";
    }
  },
  async auth(state: any) {
    if (state.sessionID == null) { return; }
    state.sessionToken = await aicevote.getSessionToken(state.sessionID);
    const profile = await aicevote.getMyProfile(state.sessionToken);
    state.name = profile.name;
    state.imageURI = profile.imageURI;
  },
  visitHome(state: any) {
    state.isVisitedHome = true;
  }
};
