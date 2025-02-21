import { database } from "./firebaseConfig";
import { ref, set, get, update, remove, onValue, onDisconnect, push } from "firebase/database";


const updatePlayerData = async (playerId, data) => {
  try {
    await set(ref(database, `players/${playerId}`), data);
  } catch (error) {
    console.error("Error updating player data:", error);
  }
};

// Ambil data pemain tertentu
const getPlayerData = async (playerId) => {
  try {
    const snapshot = await get(ref(database, `players/${playerId}`));
    return snapshot.exists() ? snapshot.val() : null;
  } catch (error) {
    console.error("Error getting player data:", error);
    return null;
  }
};

// Hapus pemain
const removePlayer = async (playerId) => {
  try {
    await remove(ref(database, `players/${playerId}`));
  } catch (error) {
    console.error("Error removing player:", error);
  }
};

// Pantau perubahan data pemain
const observePlayers = (callback) => {
  const playersRef = ref(database, "players");
  onValue(playersRef, (snapshot) => {
    callback(snapshot.val() || {});
  });
};

// Tandai pemain sebagai offline saat keluar
const setPlayerOfflineOnDisconnect = (playerId) => {
  const playerRef = ref(database, `players/${playerId}/status`);
  onDisconnect(playerRef).set("offline");
};

export { updatePlayerData, getPlayerData, removePlayer, observePlayers, setPlayerOfflineOnDisconnect };
