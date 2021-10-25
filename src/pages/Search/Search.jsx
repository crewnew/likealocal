import { connect } from "react-redux";
import styled from "styled-components";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
  Snippet,
} from "react-instantsearch-dom";
import CardThree from "../../components/CardThree/CardThree";

const searchClient = instantMeiliSearch("http://164.90.235.228/", "");

function Search(props) {
  return (
    <div>
      <StyledResults>
        <StyledTitle>
          Search results for: {props.query.query}
        </StyledTitle>
        <h3>
          35 tips and 2 tours by <span style={{ color: "red" }}>13 locals</span>
        </h3>
      </StyledResults>
      <StyledContent>
        <InstantSearch
          indexName="places"
          searchClient={searchClient}
          // searchState={props?.query}
        >
          <StyledPanels>
            <StyledLeftPanel>
              <ClearRefinements />
              <h2>Place Style</h2>
              <RefinementList attribute="place_style" />
              <h2>Place Style Type</h2>
              <RefinementList attribute="place_style_type" />
              <Configure
                hitsPerPage={20}
                attributesToSnippet={["description:50"]}
                snippetEllipsisText={"..."}
              />
            </StyledLeftPanel>

            <StyledRightPanel>
              <div style={{ display: "none" }}>
                <SearchBox defaultRefinement={props?.query.query} />
              </div>
              <Hits hitComponent={Hit} />
            </StyledRightPanel>
          </StyledPanels>
        </InstantSearch>
      </StyledContent>
    </div>
  );
}

function Hit(props) {
  console.log("props hit", props);
  return (
    <div
      style={{
        width: "100%",
        height: "250px",
        background: "white",
        marginBottom: "20px",
        borderRadius: "4px",
      }}
    >
      <CardThree
        title={props.hit.name}
        author={props.hit.author_name}
        description={props.hit.short_description}
      />
      <div style={{ display: "none" }}>
        <StyledHighlight key={props.hit} attribute="name" hit={props.hit} />
        <Snippet attribute="description" hit={props.hit} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    query: state.searchReducer,
  };
};

export default connect(mapStateToProps)(Search);

const StyledResults = styled.div`
  height: 200px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  font-size: 65px;
  line-height: 1.05;
  font-family: "ProbaPro", sans-serif;
  font-weight: 600;
  margin-bottom: 10px;
`;

const StyledContent = styled.div`
  background-color: white;
`;

const StyledPanels = styled.div`
  display: flex;
  padding: 0 140px;
  ul {
    list-style-type: none;
    padding: 0;
  }
`;

const StyledLeftPanel = styled.div`
  width: 20%;
  padding-right: 12px;

  .ais-RefinementList-label {
    position: relative;
    width: 100%;
    padding: 6px;
  }
  .ais-RefinementList-item {
    height: 40px;
    margin: 1px 0;
    background-color: #e6e6e6;
    display: flex;
    align-items: center;
  }
  .ais-RefinementList-labelText {
    margin-left: 4px;
  }
  .ais-RefinementList-count {
    color: #00000050;
    position: absolute;
    right: 20px;
  }
  h2 {
    font-size: 18px;
    margin: 10px;
  }
  .ais-ClearRefinements-button {
    width: 100%;
    height: 40px;
  }

  .ais-RefinementList-item--selected {
    border-left: 3px solid red;
    background-color: white;
  }

  .ais-RefinementList-checkbox {
    display: none;
  }
`;

const StyledRightPanel = styled.div`
  width: 80%;
`;

const StyledHighlight = styled(Highlight)`
  height: auto;
`;
