import { create } from "zustand";

interface gameQuery {
  genreId?: number | undefined;
  platformsId?: number | undefined;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
    gameQuery : gameQuery;
    searchText: (searchText: string) => void;
    setGenre: (genreId: number) => void;
    setPlatform: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
}


const useGamesQueryStore = create<GameQueryStore>((set) => ({

    gameQuery: {},
    searchText: (searchText) => set(() => ({ gameQuery: {searchText} })),
    setGenre: (genreId) => set((state) => ({ gameQuery: {...state.gameQuery, genreId} })),
    setPlatform: (platformId) => set((state) => ({ gameQuery: {...state.gameQuery, platformsId: platformId} })),
    setSortOrder: (sortOrder) => set((state) => ({ gameQuery: {...state.gameQuery, sortOrder} })),
}));

export default useGamesQueryStore;