package com.zelix.yikondi.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of {@link PatientEmergencyNumberSearchRepository} to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class PatientEmergencyNumberSearchRepositoryMockConfiguration {

    @MockBean
    private PatientEmergencyNumberSearchRepository mockPatientEmergencyNumberSearchRepository;

}
