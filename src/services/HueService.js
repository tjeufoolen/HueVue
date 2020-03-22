import axios from 'axios';

export class HueService {
    constructor() {
        this.baseUrl = `http://${process.env.VUE_APP_HUE_HOST}/api/${process.env.VUE_APP_HUE_USERNAME}`;
        this.api = axios;
    }
    
    getScenes() {
        let scenes = []; 
        
        // Get all scenes
        this.api.get(`${this.baseUrl}/scenes`).then(({data}) => {
            for (var key in data) {
                scenes.push({ 
                    id: key,
                    name: data[key].name, 
                    group: data[key].group,
                });
            }
        });

        return scenes;
    }

    setScene(groupId, sceneKey) {
        this.api.put(`${this.baseUrl}/groups/${groupId}/action`, {
            on: true,
            scene: sceneKey
        });
    }
}