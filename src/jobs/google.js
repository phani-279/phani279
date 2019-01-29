const { google } = require('googleapis')
const merge = require('lodash/merge')
const scopes = 'https://www.googleapis.com/auth/analytics.readonly'
const request = require('request');
const jwt = new google.auth.JWT(process.env.CLIENT_EMAIL, null, process.env.PRIVATE_KEY, scopes)

const CLIENT_EMAIL = 'DigitalCurrentAnalytics@gmail.com'
const PRIVATE_KEY = '85o@OYZeWvvi'


class GoogleAnalytics {
    getNewUsers() { }
    getSessions() { }
    getBounces() { }
    getSessionDuration() { }
    getPageviews() { }
    getGoalsCompletions() { }
    getGoalCompletionsByGoal() { }
    getRevenue() { }
    getAssistedConversions() { }
    getUsers() { }

}

class GoogleSearchConsole {
    constructor() {
        this.getCrawlURLErrors = {
            getServerError: () => { },
            getSoft404: () => { },
            getAccessDenied: () => { },
            getNotFound: () => { },
            getBlocked: () => { },
            getDate: () => { }
        }
    }
    getCrawlURLErrorsbyDevice() {
        // (Desktop vs. Smartphone)
    }
    getTotalClicks() { }
    getTotalImpressions() { }

    getPosition() { }

    getQueries() { }

    getPages() { }

}

class GoogleAdwords {

    getDate() { }
    getCampaign() { }
    getAdGroup() { }
    getKeyword() { }
    getEngine() { }
    getDevice() { }
    getClicks() { }
    getImpressions() { }
    getImpressionShare() { }
    getImpressionSharelosttoRank() { }
    getImpressionSharelosttoBudget() { }
    getPosition() { }
    getMediaCost() { }
    getQualityScore() { }
    getConversions() { }
}

module.exports = merge(new GoogleAnalytics, new GoogleSearchConsole, new GoogleAdwords)
export default module.exports