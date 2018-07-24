import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import SignIn from '../SignIn/SignIn';
import PropTypes from 'prop-types';
import SlideMenu from 'react-slide-menu';

import { toggleMenu } from '../../Actions/menu';
import { githubJobsAction } from '../../Actions/github';

import { nav } from '../../helpers/nav';
import { githubApiRequest } from '../../helpers/api-helpers';

import menuIcon from '../../images/menu.svg';

export class Home extends Component {
  componentDidMount = async () => {
    // TODO Add try catch for error handling here
    const githubJobListings = await githubApiRequest();
    this.props.githubJobs(githubJobListings);
  }

  render() {
    const { slideMenuActive, toggleMenu } = this.props;

    return (
      <SlideMenu
        active={slideMenuActive}
        nav={nav}
        reactRouter={true}
      >
        <section className="home">
          <div className="logo-section">
            <div
              className="home__menu--icon"
              onClick={toggleMenu}
            >
              <img className="home__menu--icon" src={menuIcon}/>
            </div>
          </div>
        </section>
      </SlideMenu>
    );
  }
}

export const mapStateToProps = state => ({
  slideMenuActive: state.slideMenuActive
});

export const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toggleMenu()),
  githubJobs: jobs => dispatch(githubJobsAction(jobs))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

Home.propTypes = {
  toggleMenu: PropTypes.func,
  githubJobs: PropTypes.func,
  slideMenuActive: PropTypes.bool
};