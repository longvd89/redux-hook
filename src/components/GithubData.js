/**
 * Created by vulong on 25/10/2019.
 */
import React from 'react';
import { connect } from 'react-redux';
import { fetchGithubData } from '../actions/index';
function GithubData({data}) {
    console.info('DATA: ', data);
    // const data = ''
    if(!data) {
        return (
            <div>
                No Data
            </div>
        )
    }
    return (
        <div>
            <div>
                Name: { data.name }
            </div>
            <br />
            <div>
                Blog: { data.blog }
            </div>
            <br />
            <div>
                Github Followers: { data.followers }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    console.info('GITHUB DATA: ', state)
    return {
        data: state.githubReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dataGit: () => dispatch(fetchGithubData())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GithubData);